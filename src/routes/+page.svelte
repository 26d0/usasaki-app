<!-- App.svelte -->
<script>
// @ts-nocheck

    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { PATTERNS, ANIMATION_DURATION, CONFETTI_CONFIG } from '$lib/constants/';
  
    /**
	 * @type {(arg0: { particleCount: number; spread: number; origin: { y: number; } | { x: number; } | { x: number; }; angle?: number; }) => void}
	 */
    let confetti;
    let currentPattern = "うささき";
    let isAnimating = false;
    let visible = true;
    let currentTheme = 'valentine';
    let counter = 0;
    let showCounter = false;

    // ユーティリティ関数
    const wait = (/** @type {number | undefined} */ ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    // テーマ設定の初期化
    const initializeTheme = () => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateTheme = (e) => {
            currentTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
        };
        
        updateTheme(darkModeMediaQuery);
        darkModeMediaQuery.addEventListener('change', updateTheme);
    };

    onMount(async () => {
        // Confettiの遅延ロード
        confetti = (await import('canvas-confetti')).default;
        initializeTheme();
    });
  
    async function fireConfetti() {
        try {
            if (!confetti) return;

            confetti(CONFETTI_CONFIG.main);
            await wait(250);
            confetti(CONFETTI_CONFIG.left);
            await wait(150);
            confetti(CONFETTI_CONFIG.right);
        } catch (error) {
            console.error('Error firing confetti:', error);
        }
    }
  
    async function randomize() {
        try {
            if (isAnimating) return;
            
            counter++;
            if (counter === 1) showCounter = true;
            
            isAnimating = true;
            visible = false;
            
            await wait(ANIMATION_DURATION);
            
            const randomIndex = Math.floor(Math.random() * PATTERNS.length);
            currentPattern = PATTERNS[randomIndex];
            
            visible = true;
    
            if (currentPattern === "うささき") {
                await wait(200);
                await fireConfetti();
            }
            
            await wait(ANIMATION_DURATION);
            isAnimating = false;
        } catch (error) {
            console.error('Error during randomization:', error);
            isAnimating = false;
        }
    }
</script>
  
<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap" rel="stylesheet">
</svelte:head>
  
<div 
    class="min-h-screen min-h-[100dvh] flex flex-col items-center justify-center bg-base-200 overflow-hidden" 
    data-theme={currentTheme}
>
    <div class="card w-[90%] max-w-[24rem] bg-base-100 shadow-xl">
        <div class="card-body items-center text-center p-4 sm:p-8">
            {#if showCounter}
                <div 
                    class="text-sm opacity-70 mb-2"
                    transition:fade={{duration: 400}}
                >
                    試行回数: {counter}回
                </div>
            {/if}
            <div class="h-20 sm:h-24 flex items-center justify-center">
                {#if visible}
                    <h1 
                        class="card-title text-3xl sm:text-5xl font-bold text-primary m-plus-rounded-1c-bold"
                        transition:fade={{duration: 200}}
                    >
                        {currentPattern}
                    </h1>
                {/if}
            </div>
            <div class="card-actions">
                <button 
                    class="btn btn-secondary text-sm sm:text-base"
                    on:click={randomize}
                    disabled={isAnimating}
                >
                    メタモルフォーゼ
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    /* グローバルスタイル */
    :global(html), :global(body) {
        font-family: "M PLUS Rounded 1c", sans-serif;
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
    }
  
    .m-plus-rounded-1c-bold {
        font-family: "M PLUS Rounded 1c", serif;
        font-weight: 700;
        font-style: normal;
    }
</style>
