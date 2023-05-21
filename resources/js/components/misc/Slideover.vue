<template>
    <TransitionRoot appear as="template">
        <Dialog as="div" class="relative z-[51]" @close="open = false">
            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>
            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <TransitionChild as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-x-0" leave-to="translate-x-full">
                            <DialogPanel class="pointer-events-auto w-screen" :class="widthSlideover">
                                <div class="flex h-full flex-col bg-white dark:bg-gray-800 shadow-xl px-5 py-2 overflow-y-scroll">
                                    <h5 class="text-[20px] text-center font-bold text-black dark:text-white uppercase tracking-wider">
                                        {{ title }}
                                    </h5>
                                    <p></p>
                                    <div class="relative flex-1 text-black dark:text-gray-400  p-2">
                                        <!-- Replace with your content -->
                                        <slot name="body"></slot>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
export default {
    name: "Slideover",
    props: {
        widthSlideover: {
            type: String,
            default: 'max-w-md',
        },
        title: {
            type: String,
            default: 'MODAL TITLE HERE',
        },
    },
    data() {
        return {
            state: {}
        };
    },
}
</script>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const open = ref(true)

</script>
