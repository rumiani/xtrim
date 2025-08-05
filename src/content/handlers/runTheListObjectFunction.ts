import { clearTitleHandler } from "@/components/content-comps/hideFunctions/clearTitleHandler/clearTitleHandler";
import { deleteButtonHandler } from "@/components/content-comps/deleteButtonHandler/deleteButtonHandler";
import { hideNewPostsNotificationHandler } from "@/components/content-comps/hideFunctions/hideNewPostsNotificationHandler/hideNewPostsNotificationHandler";
import { hideTrendsHandler } from "@/components/content-comps/hideFunctions/hideTrendsHandler/hideTrendsHandler";
import { hidePeopleYouMayKkowHandler } from "@/components/content-comps/hideFunctions/hidePeopleYouMayKkowHandler/hidePeopleYouMayKkowHandler";
import { translatePostHandler } from "@/components/content-comps/translatePostHandler/translatePost";
import { hideAdsHandler } from "@/components/content-comps/hideFunctions/hideAdsHandler/hideAdsHandler";
import { hideNotificationsHandler } from "@/components/content-comps/hideFunctions/hideNotificationsHandler/hideNotificationsHandler";
import { hideMessagesHandler } from "@/components/content-comps/hideFunctions/hideMessagesHandler/hideMessagesHandler";
import { hideNotificationNumberHandler } from "@/components/content-comps/hideFunctions/hideNotificationNumberHandler/hideNotificationNumberHandler";
import { otherThingsHnadler } from "@/components/content-comps/hideFunctions/otherThingsHandler/otherThingsHandler";
import { hideQoutedInqoutesPageHandler } from "@/components/content-comps/hideFunctions/hideQoutedInqoutesPage/hideQoutedInqoutesPage";
import { hideLikedNotifictationsHandler } from "@/components/content-comps/hideFunctions/hideLikedNotifictationsHandler/hideLikedNotifictationsHandler";
import { hideGrokHandler } from "@/components/content-comps/hideFunctions/hideGrokHandler/hideGrokHandler";
import { hidePremiumHandler } from "@/components/content-comps/hideFunctions/hidePremiumHandler/hidePremiumHandler";
import { hideSearchHandler } from "@/components/content-comps/hideFunctions/hideSearchHandler/hideSearchHandler";
import { hideTweetEngagementHandler } from "@/components/content-comps/hideFunctions/hideTweetEngagementHandler/hideTweetEngagementHandler";
import { FeatureListTypes } from "@/stores/useListStore";

export const runTheListObjectFunction = (object: FeatureListTypes) => {
    const functionsObject: { [key: string]: (status: boolean) => void } = {
        translate_button: (status) => {
            translatePostHandler(status)
        },
        profile_note: () => {
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
        hide_search: (status) => {
            hideSearchHandler(status)
        },
        hide_people_you_may_know: (status) => {
            hidePeopleYouMayKkowHandler(status)
        },
        hide_new_posts_notification: (status) => {
            hideNewPostsNotificationHandler(status)
        },
        other_things: (status) => {
            otherThingsHnadler(status)
        },
        hide_qouted_inqoutes_page: (status) => {
            hideQoutedInqoutesPageHandler(status)
        },
        hide_liked_notifictations: (status) => {
            hideLikedNotifictationsHandler(status)
        },
        hide_grok: (status) => {
            hideGrokHandler(status)
        },
        hide_premium: (status) => {
            hidePremiumHandler(status)
        },
        hide_tweet_engagement: (status) => {
            hideTweetEngagementHandler(status)
        }
    }

    functionsObject[object.value](object.status)
} 