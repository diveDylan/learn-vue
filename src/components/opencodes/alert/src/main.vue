<template>
    <transition>
        <div
            class="op-alert"
            :class="[typeClass,center ?'is-center':'','is-'+effect]"
            v-show="visible"
            role="alert"
        >
            <div class="op-alert__content">
                <span class="op-alert_title">
                    <slot name="title">{{ title }}</slot>
                </span>
                <p class="op-alert__description" v-if="$slots.default && !description"> <slot></slot></p>
                <p class="op-alert__description" v-if="$slots.default && !description"> {{ description }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "OcAlert",
        props: {
            title: {
                type: String,
                default: '这是一个测试弹框'
            },
            description: {
                type: String,
                default: '这是一个简单的描述'
            },
            type: {
                type: Boolean,
                default: true
            },
            closable: {
                type: Boolean,
                default: true
            },
            showIcon: {
                type: Boolean,
                default: true
            },
            closeText: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>

</style>
