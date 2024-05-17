<script setup lang="ts">

const addTaskModal = shallowRef(false)

useHead({title: "To-do list"})
</script>

<template>
  <div>
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
    </nav>

    <LazyModalAddTask :is_open="addTaskModal" @close="addTaskModal = !addTaskModal"/>
  </div>
</template>

