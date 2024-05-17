<script setup lang="ts">
import {format} from "date-fns"

const props = defineProps<{ is_open: boolean }>()
defineEmits(["close"])

const modalIsOpen = computed(() => props.is_open)

const date = shallowRef(null)
const priority = shallowRef(0)
</script>

<template>
  <USlideover v-model="modalIsOpen">
    <div class=" p-7 flex flex-col w-full gap-8 h-[100dvh] overflow-auto">
      <h2 class="text-4xl flex justify-between items-center">
        <span>Add task</span>

        <UIcon
            class="duration-[0.2s] cursor-pointer hover:text-red-400"
            name="i-heroicons-x-mark-solid" @click="$emit('close')"/>
      </h2>

      <form class="flex flex-col gap-8 h-full">
        <UFormGroup label="Name" size="xl" required>
          <UInput color="white" size="lg" class="!text-xl mt-2" variant="outline" placeholder="Morning exercise" />
        </UFormGroup>

        <UFormGroup label="Description" size="xl" required>
          <UTextarea color="white" size="lg" :rows="8" class="!text-xl mt-2" variant="outline" placeholder="Morning exercise" />
        </UFormGroup>

        <UFormGroup label="Expiration date" size="xl">
          <VDatePicker is-dark v-model="date">
            <template #default="{ togglePopover }">
              <UButton
                  icon="i-heroicons-calendar-days-20-solid"
                  size="lg" variant="soft" block class="text-lg"
                  @click="togglePopover">{{
                  date ? format(date, 'd MMM, yyy') : 'Select date'
                }}</UButton>
            </template>
          </VDatePicker>
        </UFormGroup>

        <UFormGroup :label="`Priority: ${priority}`" size="xl">
          <URange class="mt-4" :step="1" v-model:model-value="priority" size="md" :min="1" :max="3" />
        </UFormGroup>

        <UButton type="submit" block size="xl" class="text-lg mt-auto" color="green">Add Task</UButton>
      </form>
    </div>
  </USlideover>
</template>