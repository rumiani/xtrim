import { clearTitleHandler } from "@/components/content-comps/hideFunctions/clearTitleHandler/clearTitleHandler";
import { FeatureListTypes } from "@/assets/lists/featuresList";
import { deleteButtonHandler } from "@/components/content-comps/deleteButtonHandler/deleteButtonHandler";
import { hideNewPostsNotificationHandler } from "@/components/content-comps/hideFunctions/hideNewPostsNotificationHandler/hideNewPostsNotificationHandler";
import { hideTrendsHandler } from "@/components/content-comps/hideFunctions/hideTrendsHandler/hideTrendsHandler";
import { hideSearchBarHandler } from "@/components/content-comps/hideFunctions/hideSearchBarHandler/hideSearchBarHandler";
import { hidePeopleYouMayKkowHandler } from "@/components/content-comps/hideFunctions/hidePeopleYouMayKkowHandler/hidePeopleYouMayKkowHandler";
import { translatePostHandler } from "@/components/content-comps/translatePostHandler/translatePost";
import { hideAdsHandler } from "@/components/content-comps/hideFunctions/hideAdsHandler/hideAdsHandler";
import { hideNotificationsHandler } from "@/components/content-comps/hideFunctions/hideNotificationsHandler/hideNotificationsHandler";
import { hideMessagesHandler } from "@/components/content-comps/hideFunctions/hideMessagesHandler/hideMessagesHandler";
import { hideMessagesSidebarHandler } from "@/components/content-comps/hideFunctions/hideMessagesSidebarHandler/hideMessagesSidebarHandler";
import { hideNotificationNumberHandler } from "@/components/content-comps/hideFunctions/hideNotificationNumberHandler/hideNotificationNumberHandler";
import { otherThingsHnadler } from "@/components/content-comps/hideFunctions/otherThingsHandler/otherThingsHandler";

export const runTheListObjectFunction = (object: FeatureListTypes) => {
    console.log("runTheListObjectFunction")
    const functionsObject: { [key: string]: (status: boolean) => void } = {
        translate_button: (status) => {
            translatePostHandler(status)
        },
        profile_note: (status) => {
            console.log(status);
            // accountNoteHandler(status)
        },
        delete_button_for_your_posts: (status) => {
            deleteButtonHandler(status)
        },
        remove_post_ads: (status) => {
            hideAdsHandler(status)
        },
        hide_title_notification: (status) => {
            clearTitleHandler(status)
        },
        hide_notifications: (status) => {
            hideNotificationsHandler(status)
        },
        hide_notifications_number: (status) => {
            hideNotificationNumberHandler(status)
        },
        hide_liked_notifications: () => {
        },
        hide_messages: (status) => {
            hideMessagesHandler(status)
        },
        hide_trends: (status) => {
            hideTrendsHandler(status)
        },
        hide_search_bar: (status) => {
            hideSearchBarHandler(status)
        },
        hide_messages_sidebar: (status) => {
            hideMessagesSidebarHandler(status)
        },
        hide_people_you_may_know: (status) => {
            hidePeopleYouMayKkowHandler(status)
        },
        hide_new_posts_notification: (status) => {
            hideNewPostsNotificationHandler(status)
        },
        other_things: (status) => {
            otherThingsHnadler(status)
        }
    }

    functionsObject[object.value](object.status)
} 