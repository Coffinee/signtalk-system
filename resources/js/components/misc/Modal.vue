<template>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0 ">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform shadow text-left transition-all sm:my-8 sm:w-full sm:max-w-lg " :class="widthModal">
                <div class="overflow-y-auto bg-white dark:bg-gray-700 rounded-lg">
                  <div class="py-[10px] w-full border-b rounded-t  dark:border-gray-600 flex place-items-center px-5">
                      <h5 class="text-xl font-semibold text-gray-900 dark:text-white">{{ title }}</h5>
                  </div>
                  <div class="px-5 py-3 overflow-y-auto dark:text-white" :class="heightModal">
                      <slot/>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>

<script>
export default {
    name: "Modal",
    props: {
        widthModal: {
            type: String,
            default: 'w-[500px]',
        },
        heightModal: {
            type: String,
            default: 'h-[200px]',
        },
        title: {
            type: String,
            default: '',
        },
    },
}
</script>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
// import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const open = ref(true)
</script>