import Vue from 'vue';
import Vuetify, {
    VApp,
    VMain,
    VAppBar,
    VFooter,
    VContainer,
    VToolbar,
    VToolbarTitle,
    VDialog,
    VRow,
    VCol,
    VDataTable,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VTextField,
    VSelect,
    VSpacer,
    VIcon,
    VBtn,
    VAlert,
    VImg,
    VMenu,
    VList,
    VListItem,
    VListItemTitle,
    VTimeline,
    VTimelineItem,
    VTreeview,
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VApp,
        VMain,
        VAppBar,
        VFooter,
        VContainer,
        VToolbar,
        VToolbarTitle,
        VDialog,
        VRow,
        VCol,
        VDataTable,
        VCard,
        VCardTitle,
        VCardText,
        VCardActions,
        VTextField,
        VSelect,
        VSpacer,
        VIcon,
        VBtn,
        VAlert,
        VImg,
        VMenu,
        VList,
        VListItem,
        VListItemTitle,
        VTimeline,
        VTimelineItem,
        VTreeview
    }
})

export default new Vuetify()