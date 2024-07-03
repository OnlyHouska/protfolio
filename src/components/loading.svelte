<script lang="ts"></script>

<main>
    <div class="loading">
        <div class="loading__dots">
            <div class="loading__dot"></div>
            <div class="loading__dot"></div>
            <div class="loading__dot"></div>
        </div>
    </div>
</main>

<style lang="scss">
    .loading {
        &__dots {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            gap: 1rem;
        }
        &__dot {
            width: 1rem;
            aspect-ratio: 1 / 1;
            background: var(--linearLoading);
            border-radius: 50%;
            &:nth-child(1) {
                animation: spin 1s infinite 0s;
            }
            &:nth-child(2) {
                animation: spin 1s infinite 0.2s;
            }
            &:nth-child(3) {
                animation: spin 1s infinite 0.4s;
            }
        }
    }

    @keyframes spin {
        0% {
            transform: translateY(0);
        }
        20% {
            transform: translateY(50%);
        }
        100% {
            transform: translateY(0);
        }


    }
</style>