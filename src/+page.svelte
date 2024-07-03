<script lang="ts">
    //IMPORT GLOBAL VARIABLES
    import {categories} from "./lib/scripts/global";

    //IMPORT COMPONENTS
    import Header from "./components/Header.svelte";
    import Category from "./components/Category.svelte";
</script>

<main>
    <Header />

    <!--!MAIN CONTAINER-->
    <div class="main">
        <!--!CATEGORIES-->
        <div class="category">
            {#each categories as category}
                <Category {category} />
            {/each}
        </div>
    </div>
</main>

<style lang="scss">
    .main {
        padding: 2rem;
    }

    .category {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        margin-top: 5rem;
    }
</style>
