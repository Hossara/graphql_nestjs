<script setup lang="ts">

const addTaskModal = shallowRef(false)

const { data, error, pending, refresh } = await useAsyncGql({
  operation: "allTasks"
})

useHead({title: "To-do list"})
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="mb-7 flex justify-between items-center">
      <h1 class="text-4xl">To-do list</h1>

      <UButton size="lg" class="text-lg rounded-xl md:rounded-lg" color="emerald">
        <UIcon name="i-heroicons-arrow-left-on-rectangle-solid" class="text-2xl"/>
        <span class="hidden md:block">Login / Register</span>
      </UButton>
    </div>

    <nav class="flex justify-between items-center">
      <div class="flex items-center gap-2.5">
        <UButton size="lg" variant="soft" class="text-lg" @click="addTaskModal = !addTaskModal">
          <UIcon name="i-fluent-add-32-filled" class="text-xl"/>
          Add task
        </UButton>
      </div>
      <div></div>

      <LazyModalAddTask :is_open="addTaskModal" @close="addTaskModal = !addTaskModal" @refresh="refresh"/>
    </nav>

    <UAlert
        v-if="error" color="red" variant="solid"
        class="mt-8" title="Server Error!"
        description="Error while loading tasks from server"/>

    <section class="mt-8" v-if="pending">
      <UProgress animation="carousel" />
    </section>

    <section class="w-full flex flex-col mt-8 gap-2.5" v-else>
      <UCard v-for="(task, index) in data.tasks" :key="task.name" class="text-lg">
        <span class="font-bold text-xl">{{ index + 1 }})</span>&emsp;{{ task.name }}
      </UCard>
    </section>
  </div>
</template>

