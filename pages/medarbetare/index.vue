<template>
  <Container>
    <div class="space-y-12">
      <div
        class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
      >
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Våra medarbetare
        </h2>
        <p class="text-xl text-gray-500">
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
          ultricies donec risus sodales. Tempus quis et.
        </p>
      </div>

      <ul
        role="list"
        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
      >
        <li v-for="person in contacts" :key="person.id">
          <div class="space-y-4">
            <NuxtLink :to="$route.path + '/' + person.uid">
              <div class="aspect-w-3 aspect-h-2">
                <prismic-image
                  class="object-cover shadow-lg rounded-lg"
                  :field="person.data.image"
                />
              </div>
            </NuxtLink>

            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <prismic-rich-text :field="person.data.name" class="" />
                <p class="text-indigo-600">{{ person.role }}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Container>
</template>

<script setup>
import Container from '@/components/UI/Container.vue';

const { contacts, fetchAll } = useMedarbetare();

useFetch(async () => {
  await fetchAll();
});
</script>

<style lang="scss" scoped></style>
