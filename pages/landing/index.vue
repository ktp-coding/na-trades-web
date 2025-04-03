<script setup lang="ts">
// Components will be imported here
const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <main class="min-h-screen text-white bg-gradient-to-b from-[#0E1314] to-black relative overflow-hidden">
        <div
            class="absolute top-[20%] -left-[15%] w-[500px] h-[500px] bg-[#1C1E22] rounded-full opacity-[0.15] blur-[120px]">
        </div>
        <div
            class="absolute top-[20%] -right-[15%] w-[500px] h-[500px] bg-[#1C1E22] rounded-full opacity-[0.15] blur-[120px]">
        </div>
        <!-- Header -->
        <header class="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
            <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
                <div class="flex items-center">
                    <img src="/images/na-logo-gray.png" alt="Logo" class="w-8 h-8 sm:w-12 sm:h-12 rounded-full" />
                </div>
                <!-- Desktop Menu -->
                <div class="hidden md:flex gap-8">
                    <a href="#about" class="hover:text-[#99e18e]">About</a>
                    <a href="#systems" class="hover:text-[#99e18e]">Systems</a>
                    <a href="#contact" class="hover:text-[#99e18e]">Contact</a>
                </div>
                <!-- Mobile Menu Button -->
                <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </nav>
            <!-- Mobile Menu -->
            <div v-if="isMenuOpen"
                class="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800/50 transition-all duration-300">
                <div class="container mx-auto px-4 py-4 flex flex-col gap-4">
                    <a href="#about" @click="toggleMenu" class="hover:text-[#99e18e] py-2">About</a>
                    <a href="#systems" @click="toggleMenu" class="hover:text-[#99e18e] py-2">Systems</a>
                    <a href="#systems" @click="toggleMenu" class="hover:text-[#99e18e] py-2">Blog</a>
                    <a href="#systems" @click="toggleMenu" class="hover:text-[#99e18e] py-2">Blog</a>
                    <a href="#systems" @click="toggleMenu" class="hover:text-[#99e18e] py-2">Blog</a>
                    <a href="#contact" @click="toggleMenu" class="hover:text-[#99e18e] py-2">Contact</a>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
            <div class="container mx-auto text-center">
                <div class="flex justify-center">
                    <img src="/images/na-trades.png" alt="NA TRADES"
                        class="h-40 sm:h-48 md:h-56 lg:h-64 w-auto object-contain" />
                </div>
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4 mt-6 sm:mt-8">NA TRADES</h1>
                <p class="text-[#99e18e] text-lg sm:text-xl md:text-2xl">ICT CONCEPT & QUARTERLY THEORY</p>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-12 sm:py-20 px-4">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">About</h2>
                <p class="max-w-3xl mx-auto text-base sm:text-lg opacity-90 px-4">
                    NA TRADES applies ICT Concept and Quarterly Theory to uncover the true intentions behind price
                    action.
                    Every trade is rooted in structure, timing, and clarity — a reflection of our commitment to
                    mastering the craft, respecting the process, and growing with consistency in the prop firm journey.
                </p>
            </div>
        </section>

        <!-- Trading Systems Section -->
        <section id="systems" class="py-12 sm:py-20 px-4 bg-black/50">
            <div class="container mx-auto">
                <h2 class="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Trading Systems</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    <!-- AMD Model -->
                    <div
                        class="relative p-[1px] rounded-2xl bg-gradient-to-b from-gray-700/50 via-gray-900/50 to-black/50 backdrop-blur-sm">
                        <div
                            class="bg-gradient-to-b from-[#1C1E22]/80 to-black/90 p-6 sm:p-8 rounded-2xl text-center h-full backdrop-blur-sm">
                            <div class="mb-4 sm:mb-6">
                                <img src="/images/logo-amd.svg" alt="AMD" class="w-16 h-16 sm:w-24 sm:h-24 mx-auto" />
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">AMD Models</h3>
                            <p class="opacity-80 text-sm sm:text-base">Strategic intraday timing model that identifies
                                Accumulation,
                                Manipulation, and Distribution phases to align with institutional flow.</p>
                            <ul class="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 space-y-1 text-left inline-block">
                                <li>• Optimized around key session timings</li>
                                <li>• Recognizes liquidity traps and engineered moves</li>
                                <li>• Ideal for scalping and intraday directional setups</li>
                            </ul>
                        </div>
                    </div>

                    <!-- ICT Concept -->
                    <div
                        class="relative p-[1px] rounded-2xl bg-gradient-to-b from-gray-700/50 via-gray-900/50 to-black/50 backdrop-blur-sm">
                        <div
                            class="bg-gradient-to-b from-[#1C1E22]/80 to-black/90 p-6 sm:p-8 rounded-2xl text-center h-full backdrop-blur-sm">
                            <div class="mb-4 sm:mb-6">
                                <img src="/images/logo-ict.svg" alt="ICT" class="w-16 h-16 sm:w-24 sm:h-24 mx-auto" />
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">ICT Concept</h3>
                            <p class="opacity-80 text-sm sm:text-base">Smart money framework focusing on liquidity,
                                market structure, and optimal
                                trade entries using institutional price delivery models.</p>
                            <ul class="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 space-y-1 text-left inline-block">
                                <li>• Liquidity sweep and inducement zones</li>
                                <li>• Order block and fair value gap (FVG) entries</li>
                                <li>• Time & price alignment for precision execution</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Quarterly Theory -->
                    <div
                        class="relative p-[1px] rounded-2xl bg-gradient-to-b from-gray-700/50 via-gray-900/50 to-black/50 backdrop-blur-sm">
                        <div
                            class="bg-gradient-to-b from-[#1C1E22]/80 to-black/90 p-6 sm:p-8 rounded-2xl text-center h-full backdrop-blur-sm">
                            <div class="mb-4 sm:mb-6">
                                <img src="/images/logo-qt.svg" alt="QUANT" class="w-16 h-16 sm:w-24 sm:h-24 mx-auto" />
                            </div>
                            <h3 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Quarterly Theory</h3>
                            <p class="opacity-80 text-sm sm:text-base">Macro-level strategy that breaks down quarterly
                                price cycles to identify
                                high-probability directional bias and timing.</p>
                            <ul class="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 space-y-1 text-left inline-block">
                                <li>• Weekly bias within quarterly context</li>
                                <li>• Accumulation → Manipulation → Expansion sequence</li>
                                <li>• Bias-driven signal filtering for cleaner setups</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-12 sm:py-20 px-4">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Contact</h2>
                <div class="flex justify-center gap-6 sm:gap-8">
                    <a href="#" class="text-[#99e18e] hover:text-[#c2f0bb]">
                        <i class="fab fa-facebook text-xl sm:text-2xl"></i>
                    </a>
                    <a href="#" class="text-[#99e18e] hover:text-[#c2f0bb]">
                        <i class="fab fa-youtube text-xl sm:text-2xl"></i>
                    </a>
                    <a href="#" class="text-[#99e18e] hover:text-[#c2f0bb]">
                        <i class="fab fa-discord text-xl sm:text-2xl"></i>
                    </a>
                    <a href="#" class="text-[#99e18e] hover:text-[#c2f0bb]">
                        <i class="fas fa-envelope text-xl sm:text-2xl"></i>
                    </a>
                </div>
                <p class="mt-8 sm:mt-12 text-xs sm:text-sm opacity-60">© 2025 NA TRADES. All rights reserved.</p>
            </div>
        </section>
    </main>
</template>

<style scoped>
.container {
    max-width: 1400px;
}
</style>
