<template>
    <main>
        <section>
            <h1>Olá eu sou um sobre</h1>
        </section>

        <section>
            <RouterLink to="/">
                <picture>
                    <source srcset="../assets/seta-voltar-white.png" media="(prefers-color-scheme:dark)" />
                    <img src="../assets/seta-voltar.png" alt="voltar" width="35" height="35">
                </picture>
            </RouterLink>
        </section>
    </main>
</template>

<style scoped>
.voltar {
    cursor: pointer;
}
</style>