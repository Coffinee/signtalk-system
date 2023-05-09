<template>
    <div class="w-full py-4">
        <h2>
            <button
                @click="open = !open"
                type="button"
                :class="accordionColor"
                class="flex  items-center text-white uppercase justify-between w-full font-rubik-light font-bold pl-6 tracking-wider text-left text-[12px] border border-b-0 border-gray-200 hover:bg-[]"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"

            >
                <span class="w-full pr-3" :class="titleAlign">{{ sectiontitle }}</span>
                <svg
                    :class="{ '-rotate-90': !open }"
                    data-accordion-icon
                    class="w-6 h-6 -rotate-190 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
        </h2>
        <Transition>
            <div v-if="open">
                <div class="py-5 font-light ">
                    <!-- <div
                    class="p-5 font-light border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                > -->
                    <!-- <p class="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive
                        components built on top of Tailwind CSS including
                        buttons, dropdowns, modals, navbars, and more.
                    </p>
                    <p class="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to
                        <a
                            href="/docs/getting-started/introduction/"
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                            >get started</a
                        >
                        and start developing websites even faster with
                        components on top of Tailwind CSS.
                    </p> -->
                    <slot />
                </div>
            </div>
        </Transition>
    </div>
</template>
<script>
export default {
    props: {
        sectiontitle: {
            value: "",
            type: String,
        },
        titleAlign:{
            type: String,
            default: 'text-left'
        },
        accordionColor:{
            type: String,
            default: 'bg-[#EAEAEA]'
        },
        setOpen:{
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            open: this.setOpen
        };
    },
};
</script>
<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
