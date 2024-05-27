<script setup lang="ts">

const addTaskModal = shallowRef(false)

const { data, error, pending, refresh } = await useAsyncGql({
  operation: "allTasks"
})

useHead({title: "To-do list"})

const toggleTask = (index: number) => {

}
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <UContainer class="w-full flex justify-center items-center py-16">
      <h1 class="flex items-center font-black text-4xl">
        <img src="~/assets/brand/logo64.svg" class="w-[50px] mr-2" alt="Todo" loading="lazy">

        <span class="text-blue">to</span>
        <span class="text-purple-dark">do</span>
      </h1>
    </UContainer>

    <div class="bg-[#1A1A1A] h-full w-full flex justify-center">

      <!-- Main Container -->
      <div class="max-w-[730px] w-full relative">

        <!-- Navigation bar -->
        <nav class="w-full absolute -top-6 flex justify-between items-center">
          <div class="flex items-center gap-2.5">
            <UButton size="lg" variant="soft" class="text-lg" @click="addTaskModal = !addTaskModal">
              <UIcon name="i-fluent-add-32-filled" class="text-xl"/>
              Add task
            </UButton>

            <UButton size="lg" variant="soft" class="text-lg rounded-xl md:rounded-lg" color="emerald">
              <UIcon name="i-heroicons-arrow-left-on-rectangle-solid" class="text-2xl"/>
              <span class="hidden md:block">Login / Register</span>
            </UButton>
          </div>

          <!-- Modals -->
          <LazyModalAddTask :is_open="addTaskModal" @close="addTaskModal = !addTaskModal" @refresh="refresh"/>
        </nav>

        <!-- Content -->
        <article class="mt-16 flex flex-col">

          <!-- Information -->
          <div class="flex justify-between items-center">
            <p class="flex items-center">
              <span class="text-blue font-bold text-sm mr-2">All tasks</span>

              <UBadge color="gray" class="rounded-full">{{ data ? data.tasks.length : '0' }}</UBadge>
            </p>

            <p class="flex items-center">
              <span class="text-purple font-bold text-sm mr-2">Done</span>

              <UBadge color="gray" class="rounded-full">{{ data ? data.tasks.filter((task) => task.done).length : '0' }}</UBadge>
            </p>
          </div>

          <!-- Tasks -->
          <div class="flex justify-between items-center flex-col px-2 py-16" v-if="!data || data.tasks.length === 0">
            <UIcon name="i-fluent-clipboard-48-regular" class="text-7xl text-[#3C3C3C]"/>

            <h2>You don't have tasks registered yet</h2>

            <p>Create tasks and organize your to-do items</p>
          </div>

          <div class="flex justify-between items-center flex-col px-2 py-16 gap-3 " v-else>
            <UCard v-for="(task, index) in data.tasks" :key="task.name" class="w-full cursor-pointer duration-[0.2s]">
              <div class="w-full text-lg flex justify-between items-center">
                <div class="flex items-center">
                  <UCheckbox @click="toggleTask(index)"/>

                  <span class="ml-3 text-[#F2F2F2]" :class="{ 'line-through': task.done }">{{ task.name }}</span>
                </div>


              </div>
            </UCard>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

