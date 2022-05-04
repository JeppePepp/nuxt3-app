<template>
  <div class="mx-auto">
    <div class="relative">
      <Hero />
    </div>

    <Container v-if="post" class="">
      <article class="prose lg:prose-xl">
        <prismic-rich-text :field="post.data.title" />
        <prismic-rich-text :field="post.data.body" />
      </article>
    </Container>
  </div>
</template>

<script setup>
import Container from '@/components/UI/Container.vue';
import Hero from '@/components/Hero.vue';

const { client } = usePrismic();

const post = ref(null);

useFetch(async () => {
  const response = await client.getByUID(
    'post',
    'situationen-ukraine-och-ryssland'
  );

  post.value = response;
});
</script>

<style lang="css"></style>
