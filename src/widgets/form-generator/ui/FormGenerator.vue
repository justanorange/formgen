<template>
  <form @submit.prevent="onSubmit">
    <div v-for="field in fields" :key="field.name" class="form-field">
      <label :for="field.name">{{ field.label }}</label>

      <slot :name="field.name" :field="field">
        <input
          v-if="field.type === 'input' || field.type === 'password'"
          :type="field.inputType"
          :name="field.name"
          :id="field.name"
          v-model="model[field.name]"
          :placeholder="field.placeholder"
          :required="field.required"
        />

        <select
          v-else-if="field.type === 'select'"
          :id="field.name"
          :name="field.name"
          v-model="model[field.name]"
          :required="field.required"
        >
          <option
            v-for="option in field.options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>

        <textarea
          v-else-if="field.type === 'textarea'"
          :id="field.name"
          :name="field.name"
          v-model="model[field.name]"
          :placeholder="field.placeholder"
          :required="field.required"
          :rows="field.rows"
          :cols="field.cols"
        ></textarea>

        <div v-else-if="field.type === 'radio'">
          <div
            v-for="option in field.options"
            :key="option.value"
          >
            <input
              type="radio"
              :name="field.name"
              :id="`${field.name}-${option.value}`"
              :value="option.value"
              v-model="model[field.name]"
              :required="field.required"
            />
            <label :for="`${field.name}-${option.value}`">{{ option.text }}</label>
          </div>
        </div>

        <div v-else-if="field.type === 'checkbox'">
          <div
            v-for="option in field.options"
            :key="option.value"
          >
            <input
              type="checkbox"
              :name="field.name"
              :id="`${field.name}-${option.value}`"
              v-model="model[field.name]"
              :required="field.required"
              :value="option.value"
            />
            <label :for="`${field.name}-${option.value}`">{{ option.text }}</label>
          </div>
        </div>
      </slot>
    </div>
    
    <div class="form-actions">
      <button type="submit">Submit</button>
      <button type="button" @click="onCancel">Cancel</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { FormField, FormModel } from '@/entities/form/model/types';

const props = defineProps<{
  fields: FormField[];
  model: FormModel;
}>();

const emit = defineEmits<{
  submit: [value: FormModel];
  cancel: [];
}>();

const onSubmit = () => {
  emit('submit', props.model);
};

const onCancel = () => {
  emit('cancel');
};
</script>

<style scoped lang="scss">
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
    border: 1px solid light-dark(#ccc, #444);
    border-radius: 0.5rem;
    background-color: light-dark(#f9f9f9, #222);

    .form-field {
      margin-bottom: 0.5rem;
    }

    > div > label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.25rem;
    }

    input:not([type="checkbox"]):not([type="radio"]), select, textarea {
      display: block;
      padding: 0.5rem;
      font-size: 1rem;
      width: 100%;
      max-width: 300px;
      border: 1px solid light-dark(#ccc, #444);
      border-radius: 0.25rem;
      background-color: light-dark(#fff, #333);
      color: light-dark(#000, #eee);
    }

    .form-actions {
      display: flex;
      gap: 1rem;
    }
    
    button {
      width: 100px;
      padding: 0.5rem;
      font-size: 1rem;
      cursor: pointer;

      &[type="submit"] {
        background-color: #42b983;
        color: #fff;
        border: none;
        border-radius: 0.25rem;

        &:hover {
          background-color: #369870;
        }
      }

      &[type="button"] {
        background-color: #eee;
        color: #000;
        border: none;
        border-radius: 0.25rem;

        &:hover {
          background-color: #ddd;
        }
      }
    }
  }
</style>
