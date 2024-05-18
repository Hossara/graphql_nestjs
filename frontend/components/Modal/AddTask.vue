<script setup lang="ts">
import { z } from 'zod'
import {format} from "date-fns"

const props = defineProps<{ is_open: boolean }>()
defineEmits(["close"])

const modalIsOpen = computed(() => props.is_open)

const state = reactive({
  name: undefined,
  description: undefined,
  date: null,
  priority: 0
})

const schema = z.object({
  name: z.string()
      .min(3, "Task name must be at least 3 characters")
      .max(100, "Task name must be at least 100 characters"),
  description: z.string()
      .min(3, "Task description must be at least 3 characters")
      .max(500, "Task description must be at least 100 characters")
})

const submit = async () => {


  await GqlAddTask({
    task: {
      "name": "first task",
      "created_date": new Date(),
      "description": "test",
      "priority": 1
    }
  }).then((value) => {
    console.log(value.addTask)
  }).catch(reason => {
    console.log(reason)
  })
}
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

      <UForm :state="state" :schema="schema" class="flex flex-col gap-8 h-full" @submit="submit">
        <UFormGroup name="name" label="Name" size="xl" required eager-validation>
          <UInput
              v-model="state.name" color="white" size="lg"
              class="!text-xl mt-2" variant="outline"
              placeholder="Morning exercise" />
        </UFormGroup>

        <UFormGroup name="description" label="Description" size="xl" required eager-validation>
          <UTextarea
              v-model="state.description"
              color="white" size="lg" :rows="8"
              class="!text-xl mt-2" variant="outline"
              placeholder="Morning exercise" />
        </UFormGroup>

        <UFormGroup label="Expiration date" size="xl">
          <VDatePicker is-dark v-model="state.date">
            <template #default="{ togglePopover }">
              <UButton
                  icon="i-heroicons-calendar-days-20-solid"
                  size="lg" variant="soft" block class="text-lg"
                  @click="togglePopover">{{
                  state.date ? format(state.date, 'd MMM, yyy') : 'Select date'
                }}</UButton>
            </template>
          </VDatePicker>
        </UFormGroup>

        <UFormGroup :label="`Priority: ${state.priority}`" size="xl">
          <URange class="mt-4" :step="1" v-model:model-value="state.priority" size="md" :min="1" :max="3" />
        </UFormGroup>

        <UButton type="submit" block size="xl" class="text-lg mt-auto" color="green">Add Task</UButton>
      </UForm>
    </div>
  </USlideover>
</template>