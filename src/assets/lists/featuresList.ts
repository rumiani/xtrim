export type Feature = {
    category: "tool" | "hideNavbar" | "hideFeed" | "hideNotification" | "hideMisc";
    title: string;
    label: string;
    value: string;
    status: boolean;
    description: string;
};
export const list = [
    // tool
    {
        category: "tool",
        title:"Tools",
        label: "Translate button",
        value: "translate_button",
        status: false,
        description: "Adds translation button to posts",
    },
    {
        category: "tool",
        title:"Tools",
        label: "Profile note",
        value: "profile_note",
        status: false,
        description: "Custom profile notes",
    },
    {
        category: "tool",
        title:"Tools",
        label: "Quick post deletion",
        value: "quick_post_deletion",
        status: false,
        description: "Adds a delete button to your posts",
    }, {
        category: "tool",
        title:"Tools",
        label: "Quick user block button",
        value: "block_button",
        status: false,
        description: "Quick user block",
    },
    {
        category: "hideFeed",
        title:"Hide feed",
        label: "Hide post Ads",
        value: "hide_post_ads",
        status: false,
        description: "Hides ads",
    },
    // hide
    {
        category: "hideNotification",
        title:"Hide notifications",
        label: "Hide title notification",
        value: "hide_title_notification",
        status: false,
        description: "Removes red dot alert from title",
    },
    {
        category: "hideNotification",
        title:"Hide notifications",
        label: "Hide notifications",
        value: "hide_notifications",
        status: false,
        description: "Hides notifications icon",
    },
    {
        category: "hideNotification",
        title:"Hide notifications",
        label: "Hide notifications blue badge",
        value: "hide_notifications_blue_badge",
        status: false,
        description: "Hides notification blue badge",
    },
    {
        category: "hideNotification",
        title:"Hide notifications",
        label: "Hide liked notifications",
        value: "hide_liked_notifications",
        status: false,
        description: "Hides like alerts",
    },
    {
        category: "hideNavbar",
        title:"Hide navbar items",
        label: "Hide messages",
        value: "hide_messages",
        status: false,
        description: "Hides message icon",
    },
    {
        category: "hideFeed",
        title:"Hide feed",
        label: "Hide trends",
        value: "hide_trends",
        status: false,
        description: "Removes trends panel",
    },
    {
        category: "hideNavbar",
        title:"Hide navbar items",
        label: "Hide search",
        value: "hide_search",
        status: false,
        description: "Conceals search",
    },
    {
        category: "hideMisc",
        title:"Hide misc",
        label: "Hide people you know",
        value: "hide_people_you_may_know",
        status: false,
        description: "Removes suggested users",
    },
    {
        category: "hideNotification",
        title:"Hide notifications",
        label: "Hide new posts notification",
        value: "hide_new_posts_notification",
        status: false,
        description: "Hides new post alerts",
    },
    {
        category: "hideMisc",
        title:"Hide misc",
        label: "Hide trending navbar",
        value: "hide_trending",
        status: false,
        description: "Hide trending navbar",
    },
    {
        category: "hideMisc",
        title:"Hide misc",
        label: "Hide quoted in quotes page",
        value: "hide_quoted_in_quotes_page",
        status: false,
        description: "Hides quoted tweets in quotes page",
    },
    {
        category: "hideNavbar",
        title:"Hide navbar items",
        label: "Hide Grok",
        value: "hide_grok",
        status: false,
        description: "Hides Grok",
    },
    {
        category: "hideMisc",
        title:"Hide misc",
        label: "Hide upsell",
        value: "hide_upsell",
        status: false,
        description: "Hides upsell"
    },
    {
        category: "hideMisc",
        title:"Hide misc",
        label: "Hide tweet engagement",
        value: "hide_tweet_engagement",
        status: false,
        description: "Hides tweet engagement"
    }

] as const;