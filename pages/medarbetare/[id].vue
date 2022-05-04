<template>
  <div v-if="contact">
    <article class="pt-12">
      <div class="grid lg:grid-cols-2 gap-12">
        <div class="aspect-w-3 aspect-h-2">
          <prismic-image :field="contact.data.image" class="object-cover" />
        </div>
        <div>
          <prismic-rich-text
            :field="contact.data.name"
            class="font-extrabold text-5xl mb-4"
          />
          <prismic-rich-text
            :field="contact.data.title"
            class="text-gray-700"
          />
          <section class="mt-4">
            <prismic-rich-text :field="contact.data.email" class="" />
            <prismic-rich-text :field="contact.data.tel" class="" />
            <prismic-rich-text :field="contact.data.tel_vaxel" class="" />
            <prismic-rich-text :field="contact.data.launguage" class="" />
          </section>
        </div>
      </div>
    </article>
    <article class="mt-8 grid grid-cols-1 gap-12">
      <section class="prose lg:prose-xl">
        <h3 class="font-extrabold text-xl">Bakgrund</h3>
        <prismic-rich-text :field="contact.data.bakgrund" class="" />
      </section>
      <section class="prose lg:prose-xl">
        <h3 class="font-extrabold text-xl">Specialområden</h3>
        <prismic-rich-text :field="contact.data.specialomraden" class="" />
      </section>
      <section class="prose lg:prose-xl">
        <h3 class="font-extrabold text-xl">Utbildning</h3>
        <prismic-rich-text :field="contact.data.utbildning" class="" />
      </section>
    </article>

    <!-- <pre>{{ contact }}</pre> -->
  </div>
</template>

<script setup>
const { client } = usePrismic();

const contact = ref(null);
const route = useRoute();
useFetch(async () => {
  const data = await client.getByUID('medarbetare', route.params.id);

  console.log(data);
  contact.value = data;
});
</script>

<style lang="scss" scoped></style>
