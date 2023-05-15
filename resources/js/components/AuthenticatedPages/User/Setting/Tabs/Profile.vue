<script>
import Accordion from '../../../../misc/Accordion.vue'

export default {
    name:'Profile',

    components:{
        Accordion,

    }
}
</script>
<template>
    <div class="p-3 border">
        <div class="align-start">
            <h1 class="text-12">Profile</h1>
        </div>
        <Accordion :sectiontitle="'View Profile'" >
            <div class="flex flex-col items-center">
                <div class="flex sm:flex-wrap gap-2">
                    <h1 class="whitespace-nowrap">Current Password:</h1>
                    <input class="border" type="text" name="" id="">
                </div>
            </div>
        </Accordion>
        <div>
            <Accordion :sectiontitle="'Change Password'" >
                <div class="flex flex-col items-center">
                    <div class="flex sm:flex-wrap gap-2">``
                        <h1 class="whitespace-nowrap">Current Password:</h1>
                        <input class="border" type="text" name="" id="">
                    </div>
                </div>
            </Accordion>
            <Accordion :sectiontitle="'Recovery Email'" >
                <div class="flex flex-col items-center">
                    <div class="flex sm:flex-wrap gap-2">
                        <h1 class="whitespace-nowrap">Current Password:</h1>
                        <input class="border" type="text" name="" id="">
                    </div>
                </div>
            </Accordion>
        </div>
    </div>
</template>
