import { clearTitleHandler } from "@/components/content-comps/hideFunctions/clearTitleHandler/clearTitleHandler";
import { deleteButtonHandler } from "@/components/content-comps/deleteButtonHandler/deleteButtonHandler";
import { hideNewPostsNotificationHandler } from "@/components/content-comps/hideFunctions/hideNewPostsNotificationHandler/hideNewPostsNotificationHandler";
import { hideTrendsHandler } from "@/components/content-comps/hideFunctions/hideTrendsHandler/hideTrendsHandler";
import { hidePeopleYouMayKkowHandler } from "@/components/content-comps/hideFunctions/hidePeopleYouMayKkowHandler/hidePeopleYouMayKkowHandler";
import { translatePostHandler } from "@/components/content-comps/translatePostHandler/translatePost";
import { hideAdsHandler } from "@/components/content-comps/hideFunctions/hideAdsHandler/hideAdsHandler";
import { hideNotificationsHandler } from "@/components/content-comps/hideFunctions/hideNotificationsHandler/hideNotificationsHandler";
import { hideMessagesHandler } from "@/components/content-comps/hideFunctions/hideMessagesHandler/hideMessagesHandler";
import { otherThingsHnadler } from "@/components/content-comps/hideFunctions/otherThingsHandler/otherThingsHandler";
import { hideLikedNotifictationsHandler } from "@/components/content-comps/hideFunctions/hideLikedNotifictationsHandler/hideLikedNotifictationsHandler";
import { hideGrokHandler } from "@/components/content-comps/hideFunctions/hideGrokHandler/hideGrokHandler";
import { hidePremiumHandler } from "@/components/content-comps/hideFunctions/hidePremiumHandler/hidePremiumHandler";
import { hideSearchHandler } from "@/components/content-comps/hideFunctions/hideSearchHandler/hideSearchHandler";
import { hideTweetEngagementHandler } from "@/components/content-comps/hideFunctions/hideTweetEngagementHandler/hideTweetEngagementHandler";
import { Feature, list } from "@/assets/lists/featuresList";
import { profileNoteHandler } from "@/components/content-comps/accountNoteHandler/accountNoteHandler";
import { blockButtonHandler } from "@/components/content-comps/blockButtonHandler/blockButtonHandler";
import { hideNotificationBlueBadgeHandler } from "@/components/content-comps/hideFunctions/hideNotificationBlueBadgeHandler/hideNotificationBlueBadgeHandler";
import { hideQuotedInquotesPageHandler } from "@/components/content-comps/hideFunctions/hideQuotedInquotesPageHandler/hideQuotedInquotesPageHandler";

type FeatureValue = typeof list[number]['value']

type FeatureValueHandlers = Record<FeatureValue, (status: boolean) => void>;



export const runTheListObjectFunction = (object: Feature) => {    
    const functionsObject: FeatureValueHandlers = {
        translate_button: (status: boolean) => {
            translatePostHandler(status)
        },
        profile_note: (status) => {
            profileNoteHandler(status)
        },
        quick_post_deletion: (status: boolean) => {
            deleteButtonHandler(status)
        },
        hide_post_ads: (status: boolean) => {
            hideAdsHandler(status)
        },
        hide_title_notification: (status: boolean) => {
            clearTitleHandler(status)
        },
        hide_notifications: (status: boolean) => {
            hideNotificationsHandler(status)
        },
        hide_notifications_blue_badge: (status: boolean) => {
            hideNotificationBlueBadgeHandler(status)
        },
        hide_liked_notifications: (status: boolean) => {
            hideLikedNotifictationsHandler(status)

        },
        hide_messages: (status: boolean) => {
            hideMessagesHandler(status)
        },
        hide_trends: (status: boolean) => {
            hideTrendsHandler(status)
        },
        hide_search: (status: boolean) => {
            hideSearchHandler(status)
        },
        hide_people_you_may_know: (status: boolean) => {
            hidePeopleYouMayKkowHandler(status)
        },
        hide_new_posts_notification: (status: boolean) => {
            hideNewPostsNotificationHandler(status)
        },
        hide_trending: (status: boolean) => {
            otherThingsHnadler(status)
        },
        hide_quoted_in_quotes_page: (status: boolean) => {
            hideQuotedInquotesPageHandler(status)
        },

        hide_grok: (status: boolean) => {
            hideGrokHandler(status)
        },
        hide_upsell: (status: boolean) => {
            hidePremiumHandler(status)
        },
        hide_tweet_engagement: (status: boolean) => {
            hideTweetEngagementHandler(status)
        },
        block_button: (status: boolean) => {
            blockButtonHandler(status)
        }
    }

    functionsObject[object.value as FeatureValue](object.status)
} 