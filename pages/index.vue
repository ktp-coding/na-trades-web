<template>
    <div class="space-y-4">
        <h2 class="text-2xl font-bold">Welcome to NA Trades</h2>
        <div class="rounded-lg border p-4">
            <h3 class="mb-4 text-lg font-semibold">Sample Chart</h3>
            <div class="h-[300px]">
                <Line :data="chartData" :options="chartOptions" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Sample Data',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }
    ]
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
}
</script>