<script setup lang="ts">
import { LineChart } from '@/components/ui/chart-line'
import { ref, onMounted, computed } from 'vue'

interface PriceData {
    time: string
    open: number
    close: number
}

const data = [
    {
        'year': 1970,
        'Export Growth Rate': 2.04,
        'Import Growth Rate': 1.53,
    },
    // ... existing data ...
]

const priceData = ref<PriceData[]>([])

const priceDataComputed = computed(() => priceData.value)

async function fetchPriceData() {
    try {
        console.log('Fetching price data...')
        const response = await fetch('/mocks/2024.txt')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const text = await response.text()

        // แปลง CSV เป็น array of objects
        const rows = text.split('\n')
        if (rows.length < 2) {
            throw new Error('No data found in file')
        }

        const headers = rows[0].split(',')
        console.log('Headers:', headers)

        // แปลงข้อมูลแต่ละแถว
        const transformedData = rows.slice(1)
            .filter(row => row.trim()) // กรองแถวว่าง
            .map(row => {
                const values = row.split(',')
                if (values.length < 5) {
                    console.warn('Invalid row:', row)
                    return null
                }
                return {
                    time: values[0],
                    open: parseFloat(values[1]),
                    close: parseFloat(values[4])
                }
            })
            .filter((item): item is PriceData =>
                item !== null &&
                !isNaN(item.open) &&
                !isNaN(item.close)
            )

        console.log('Total data points:', transformedData.length)
        if (transformedData.length === 0) {
            throw new Error('No valid data points found')
        }

        // เรียงข้อมูลตามเวลา
        transformedData.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())

        // หาวันที่เริ่มต้นและสิ้นสุดของ 3 เดือนแรก
        const startDate = new Date(transformedData[0].time)
        const endDate = new Date(startDate)
        endDate.setMonth(startDate.getMonth() + 3)

        // กรองข้อมูลเฉพาะ 3 เดือนแรก
        const firstThreeMonthsData = transformedData.filter(item => {
            const itemDate = new Date(item.time)
            return itemDate >= startDate && itemDate <= endDate
        })

        console.log('First 3 months data points:', firstThreeMonthsData.length)
        priceData.value = firstThreeMonthsData
        console.log('Final priceData:', priceData.value.slice(0, 5))
    } catch (error) {
        console.error('Error fetching price data:', error)
        // แสดงข้อมูลตัวอย่างถ้าเกิด error
        priceData.value = [
            {
                time: '2024-01-01 18:00:00',
                open: 17530.75,
                close: 17528.25,
            },
            {
                time: '2024-01-01 18:01:00',
                open: 17528.25,
                close: 17528.0,
            },
            {
                time: '2024-01-01 18:02:00',
                open: 17528.5,
                close: 17527.5,
            },
            {
                time: '2024-01-01 18:03:00',
                open: 17528.25,
                close: 17530.5,
            },
        ]
    }
}

onMounted(() => {
    fetchPriceData()
})
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-card rounded-lg shadow p-4">
                <h2 class="text-lg font-semibold mb-2">Export Growth Rate</h2>
                <p class="text-2xl font-bold text-primary">0.82%</p>
                <p class="text-sm text-muted-foreground">Latest value (2021)</p>
            </div>
            <div class="bg-card rounded-lg shadow p-4">
                <h2 class="text-lg font-semibold mb-2">Import Growth Rate</h2>
                <p class="text-2xl font-bold text-primary">2.51%</p>
                <p class="text-sm text-muted-foreground">Latest value (2021)</p>
            </div>
            <div class="bg-card rounded-lg shadow p-4">
                <h2 class="text-lg font-semibold mb-2">Growth Rate Difference</h2>
                <p class="text-2xl font-bold text-destructive">-1.69%</p>
                <p class="text-sm text-muted-foreground">Latest value (2021)</p>
            </div>
        </div>
        <div class="mt-8">
            <div class="bg-card rounded-lg shadow p-4">
                <h2 class="text-lg font-semibold mb-4">Growth Rate Trend</h2>
                <LineChart :data="data" index="year" :categories="['Export Growth Rate', 'Import Growth Rate']"
                    :y-formatter="(tick, i) => {
                        return typeof tick === 'number'
                            ? `${tick.toFixed(2)}%`
                            : ''
                    }" />
            </div>
        </div>
        <div class="mt-8">
            <div class="bg-card rounded-lg shadow p-4">
                <h2 class="text-lg font-semibold mb-4">Price Trend 2024</h2>
                <LineChart :data="priceDataComputed" index="time" :categories="['open', 'close']" :y-formatter="(tick, i) => {
                    return typeof tick === 'number'
                        ? tick.toFixed(2)
                        : ''
                }" />
            </div>
        </div>
    </div>
</template>