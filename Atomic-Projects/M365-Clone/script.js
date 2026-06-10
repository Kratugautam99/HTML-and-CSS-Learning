// External: https://scripts.clarity.ms/0.8.65/clarity.js
// External: https://www.clarity.ms/tag/svciz78sa8

        window.claritySettings = {"projectId":"svciz78sa8","customTags":[],"eventTrackingEnabled":false};
    
// External: https://res.cdn.office.net/officehub/bundles/microsoft-clarity-ff3e2df9ac.js

            {"@context":"https://schema.org","@type":"WebPage","name":"Microsoft 365 Copilot","description":"Microsoft 365 Copilot | Create, Share and Collaborate with Office and AI","publisher":{"@type":"Organization","name":"Microsoft 365 Copilot","logo":{"@type":"ImageObject","url":"https://res.cdn.office.net/officehub/images/content/images/favicon_copilot-4370172aa6.ico"}}}
        

        {"pathAndQuery":"/","loginUrl":"https://www.office.com/login?es=UnauthClick\u0026ru=%2f%3ffromcode%3dcmmiadtp424%26refOrigin%3dBing%26origindomain%3dOffice","userConsentStatus":{"isCookieConsentRequired":false,"essentialCookiesConsented":true,"advertisingCookiesConsented":false,"analyticsCookiesConsented":false,"socialMediaCookiesConsented":false},"accountRemovedString":"Account removed","accountRemoveFailedString":"Failed to remove the account. Please try again."}
    
// External: https://js.monitor.azure.com/scripts/c/ms.shared.analytics.mectrl-3.gbl.min.js
// External: https://mem.gfx.ms/scripts/me/MeControl/10.25136.1/en-US/meBoot.min.js
// External: https://mem.gfx.ms/scripts/me/MeControl/10.25136.1/en-US/meCore.min.js

        var isSessionStorageAvailable = (function() {
            try {
                return !!window['sessionStorage'];
            } catch (e) {
                return false;
            }
        })();
    
{"enabled":true,"appId":"3027","environment":0,"locale":"en-US","sessionId":"6a3cc04b-cca8-4b95-9f2c-63b55ad870f7","build":"unknown","requiresEudb":false,"ageGroup":0,"authenticationType":2,"isCommercialHost":false,"dynamicCampaignEnabled":true,"dynamicCampaignAppName":"Unauthenticated-Copilot-Pages","dynamicCampaignFilters":{"Audience":"Production","Platform":"Web","environment":"prod","agent":"ChillUnauthenticated-Copilot-Pages"}}
/**
 * Mobile Redirect Handler Constants
 * Shared constants for mobile redirect functionality
 */

// Constants for repeated strings
var MOBILE_REDIRECT_CONSTANTS = {
    // Default values
    UNKNOWN_VALUE: "unknown",
    DEFAULT_OS_VERSION: "0.0",

    // Redirect delay constants (in milliseconds)
    REDIRECT_DELAY_WITH_LOGGING_ONLY: 1000,
    REDIRECT_DELAY_FINGERPRINT_ONLY: 0,
    REDIRECT_DELAY_IMMEDIATE: 0,
    FINGERPRINT_API_CALL_TIMEOUT_MS: 2000,

    APP_CUSTOM_SCHEME: 'ms-officemobile://',
    APP_LAUNCH_DETECTION_TIMEOUT_MS: 2500,
    POST_POPUP_DISMISS_GRACE_MS: 800,

    // Field names following API payload pattern (PascalCase)
    FIELD_NAMES: {
        DeepLinkUrl: "DeepLinkUrl",
        IpAddress: "IpAddress",
        IpV6Address: "IpV6Address",
        ScreenWidth: "ScreenWidth",
        ScreenHeight: "ScreenHeight",
        PixelRatio: "PixelRatio",
        Locale: "Locale",
        Timezone: "Timezone",
        OsVersion: "OsVersion",
        OS: "OS",
        DeviceType: "DeviceType",
        CorrelationId: "CorrelationId"
    },

    // URL patterns for fingerprinting whitelist
    URL_PATTERNS: [
        /^https:\/\/m365\.cloud\.microsoft\/chat\/.*[?&]titleId=[^&]+.*$/,
        /^https:\/\/m365\.cloud\.microsoft\/apps\/.*[?&]titleId=[^&]+.*$/,
        /^https:\/\/m365\.cloud\.microsoft\/apps\/.*[?&]appId=[^&]+.*$/,
        /^https:\/\/m365\.cloud\.microsoft\/apps\/.*[?&]templatedAppId=[^&]+.*$/,
        /^https:\/\/m365\.cloud\.microsoft\/chat\/entity1-d870f6cd-4aa5-4d42-9626-ab690c041429\/.*$/,
        /^https:\/\/m365\.cloud\.microsoft\/create(?:\/.*)?(?:\?.*)?$/,
        /^https:\/\/m365\.cloud\.microsoft\/chat\/try-voice-chat(?:\/.*)?(?:\?.*)?$/,
        // /chat or /chat/<subpath> with a fromcode QSP — DDLS deep-link/fingerprint target.
        // The path anchor (chat(?:\/[^?]*)?\?) blocks /chatfoo?...; (?:[^&]*&)* blocks
        // ?xfromcode=... and ?safe=fromcode=... by forcing fromcode= to start a fresh QSP segment.
        /^https:\/\/m365\.cloud\.microsoft\/chat(?:\/[^?]*)?\?(?:[^&]*&)*fromcode=[^&]+(?:&.*)?$/,
        /^https:\/\/eus\.sdf\.www\.microsoft365\.com\/.*[?&]testsdfddls=true.*$/,
        /^https:\/\/test\.www\.officeppe\.com\/.*[?&]testppeddls=true.*$/
    ],

    // Store URLs
    APP_STORE_BASE_URL: "https://apps.apple.com/app/apple-store/id541164041",
    APP_STORE_PT: "80423",
    APP_STORE_MT: "8",
    APP_STORE_DEFAULT_CT: "Redirection_mobile%20web_M365",

    PLAY_STORE_BASE_URL: "https://play.google.com/store/apps/details",
    PLAY_STORE_DEFAULT_UTM_SOURCE: "MobileWeb",
    PLAY_STORE_DEFAULT_UTM_CAMPAIGN: "RedirectionMobileWebM365",

    // Copilot domain for exclusion
    // TODO ADO 10781946 Remove when CCM is more responsive
    COPILOT_DOMAIN: "copilot.cloud.microsoft",

    // Default fromcode fallback
    DEFAULT_FROMCODE: "cmmcnh160ct",

    // Platform and device identifiers shared across redirect modules
    PLATFORM: {
        IOS: "ios",
        ANDROID: "android",
        OTHER: "other"
    },

    DEVICE_TYPES: {
        IPAD: "ipad",
        IPHONE: "iphone",
        ANDROID_MOBILE: "androidmobile",
        ANDROID_TABLET: "androidtablet",
        OTHER: "other"
    },

    PLATFORM_LABELS: {
        IOS: "iOS",
        ANDROID: "Android",
        OTHER: "Other"
    },

    // Design variant configuration - maps variant names to telemetry targets
    DESIGN_CONFIG: {
        "Control": { telemetryTarget: "Hero_Control" },
        "TreatmentA": { telemetryTarget: "Hero_TreatmentA" },
        "TreatmentB": { telemetryTarget: "Hero_TreatmentB" },
        "TreatmentC": { telemetryTarget: "Hero_TreatmentC" }
    },

    // URL query parameter names
    QUERY_PARAMS: {
        IS_MOBILE_REDIRECT_TEST: "ismobileredirecttest",
        DISABLE_AUTO_REDIRECT: "disableAutoRedirect",
        REFERRER: "referrer",
        CT: "ct",
        TARGET_ID: "targetId",
        UTM_SOURCE: "utm_source",
        UTM_CAMPAIGN: "utm_campaign",
        IS_LINKEDIN_VIEW: "islinkedinview",
        IS_POPUP_DISABLED: "ispopupdisabled",
        REDIRECTED_USER: "redirecteduser"
    },

    // Telemetry constants
    TELEMETRY: {
        STORE_REDIRECT_ID: "store-redirect",
        STORE_LINK_ID: "store-link",
        PAGE_LOAD_ID: "page-load",
        CACHE_FALLBACK_ID: "cache-fallback",
        MOBILE_BLOCKING_SCREEN: "MobileBlockingScreen",
        STORE_REDIRECT_TARGET: "StoreRedirect",
        STORE_DOWNLOAD_TARGET: "StoreDownload",
        PAGE_LOAD_TARGET: "PageLoad",
        CACHE_FALLBACK_TARGET: "CacheFallback",
        REFRESH_TABS_CACHE_AREA: "RefreshTabsCacheFallback",
        MANUAL_CLICK: "ManualClick",
        DOM_CONTENT_LOADED: "DOMContentLoaded",
        AUTO_REDIRECT_SUFFIX: "_AutoRedirect_",
        CUSTOM_SCHEME_TARGET: "CustomSchemeRedirect",
        CUSTOM_SCHEME_FIRED_AREA: "AppLaunchInitiated",
        CUSTOM_SCHEME_SUCCESS_AREA: "AppLaunchSuccess",
        CUSTOM_SCHEME_FAILURE_AREA: "AppLaunchFailed",
    },

    // DOM element IDs
    DOM_IDS: {
        STORE_LINK: "store-link",
        APP_STORE_LINK: "app-store-link",
        APP_STORE_LINK_IMAGE: "app-store-link-image",
        DESKTOP_STORE_PROMO: "desktop-store-promo",
        LINKEDIN_REDIRECT_DIALOG: "linkedin-redirect-dialog",
        LINKEDIN_DIALOG_CONFIRM: "linkedin-dialog-confirm",
        LINKEDIN_DIALOG_CANCEL: "linkedin-dialog-cancel",
        EXTERNAL_BROWSER_REDIRECT: "external-browser-redirect",
    },

    // Event names
    EVENTS: {
        STANDALONE_OTEL_LOGGER_READY: "standaloneOtelLoggerReady"
    },

    // Fallback timeout (ms)
    LOGGER_FALLBACK_TIMEOUT_MS: 5000
};

/**
 * Mobile Redirect Fingerprinting
 * Handles device fingerprint creation and API calls
 * Requires: mobile-redirect-constants.js to be loaded first
 */

var MobileRedirectFingerprinting = (function() {
    // Use constants from the constants file
    var CONSTANTS = MOBILE_REDIRECT_CONSTANTS;
    var FIELD_NAMES = CONSTANTS.FIELD_NAMES;
    var PLATFORM = CONSTANTS.PLATFORM;
    var DEVICE_TYPES = CONSTANTS.DEVICE_TYPES;

    // Use constants from the constants file
    var UNKNOWN_VALUE = CONSTANTS.UNKNOWN_VALUE;
    var DEFAULT_OS_VERSION = CONSTANTS.DEFAULT_OS_VERSION;
    var FINGERPRINT_API_CALL_TIMEOUT_MS = CONSTANTS.FINGERPRINT_API_CALL_TIMEOUT_MS;

    // Field names following API payload pattern (PascalCase)
    var DeepLinkUrl = FIELD_NAMES.DeepLinkUrl;
    var IpAddress = FIELD_NAMES.IpAddress;
    var IpV6Address = FIELD_NAMES.IpV6Address;
    var ScreenWidth = FIELD_NAMES.ScreenWidth;
    var ScreenHeight = FIELD_NAMES.ScreenHeight;
    var PixelRatio = FIELD_NAMES.PixelRatio;
    var Locale = FIELD_NAMES.Locale;
    var Timezone = FIELD_NAMES.Timezone;
    var OsVersion = FIELD_NAMES.OsVersion;
    var OS = FIELD_NAMES.OS;
    var DeviceType = FIELD_NAMES.DeviceType;
    var CorrelationId = FIELD_NAMES.CorrelationId;

    function extractOsInfo(userAgent) {
        let osInfo = UNKNOWN_VALUE;

        if (userAgent.includes("Windows")) {
            const match = userAgent.match(/Windows NT (\d+\.\d+)/);
            osInfo = match && match[1] ? `Windows ${match[1]}` : "Windows";
        } else if (userAgent.includes("iPhone") || userAgent.includes("iPad") || userAgent.includes("iPod")) {
            // CHECK iOS FIRST! iPhone User Agents contain "like Mac OS X" which would match macOS condition
            // Handle multiple iOS User Agent patterns:
            // Modern iPhone: "iPhone; CPU iPhone OS 18_5 like Mac OS X"
            // Legacy: "iPhone OS 15_1"
            // iPad: "iPad; CPU OS 15_1 like Mac OS X"
            let match1 = userAgent.match(/(?:iPhone |iPad |iPod )?OS (\d+[._]\d+(?:[._]\d+)?)/i);
            let match2 = userAgent.match(/Version\/(\d+\.\d+(?:\.\d+)?)/);

            let match = match1 || match2;

            if (match && match[1]) {
                // Convert underscores to dots for consistency
                const version = match[1].replace(/_/g, ".");
                osInfo = `iOS ${version}`;
            } else {
                // Fallback: try to extract any version pattern near iOS indicators
                match = userAgent.match(/(\d+[._]\d+(?:[._]\d+)?)/);
                osInfo = match && match[1] ? `iOS ${match[1].replace(/_/g, ".")}` : "iOS";
            }
        } else if (userAgent.includes("Mac OS X")) {
            // Only check for actual macOS after ruling out iOS devices
            const match = userAgent.match(/Mac OS X (\d+[._]\d+)/);
            osInfo = match && match[1] ? `macOS ${match[1].replace(/_/g, ".")}` : "macOS";
        } else if (userAgent.includes("Android")) {
            const match = userAgent.match(/Android (\d+\.\d+)/);
            osInfo = match && match[1] ? `Android ${match[1]}` : "Android";
        }

        return osInfo;
    }

    // Function to remove the last octet from IP address for privacy
    function anonymizeIpAddress(ipAddress) {
        if (!ipAddress || ipAddress === UNKNOWN_VALUE) {
            return UNKNOWN_VALUE;
        }

        // Handle IPv4 addresses (e.g., 192.168.1.100 -> 192.168.1.0)
        if (ipAddress.includes('.') && !ipAddress.includes(':')) {
            const parts = ipAddress.split('.');
            if (parts.length === 4) {
                parts[3] = '0'; // Replace last octet with 0
                return parts.join('.');
            }
        }

        // Handle IPv6 addresses (e.g., 2001:db8::1234 -> 2001:db8::0)
        if (ipAddress.includes(':')) {
            const parts = ipAddress.split(':');
            if (parts.length > 0) {
                parts[parts.length - 1] = '0'; // Replace last segment with 0
                return parts.join(':');
            }
        }

        // If we can't parse it, return as unknown for privacy
        return UNKNOWN_VALUE;
    }

    function formatTimezoneOffset(timezoneOffsetMinutes) {
        const offsetMinutes = -timezoneOffsetMinutes;
        const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
        const offsetMins = Math.abs(offsetMinutes) % 60;
        const sign = offsetMinutes >= 0 ? '+' : '-';

        return `UTC${sign}${offsetHours.toString().padStart(2, '0')}:${offsetMins.toString().padStart(2, '0')}`;
    }

    function normalizeTimezone(timezoneString) {
        try {
            // Get current UTC offset in minutes for this timezone
            const now = new Date();
            const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);

            // Create date in the target timezone
            const testDate = new Date(utcTime);
            const formatter = new Intl.DateTimeFormat('en', {
                timeZone: timezoneString,
                timeZoneName: 'longOffset'
            });

            const parts = formatter.formatToParts(testDate);
            const offsetPart = parts.find(part => part.type === 'timeZoneName');

            if (offsetPart && offsetPart.value) {
                // Returns format like "GMT+05:30" or "GMT-05:00"
                return offsetPart.value.replace('GMT', 'UTC');
            }

            // Fallback: calculate offset manually
            return formatTimezoneOffset(now.getTimezoneOffset());

        } catch (error) {
            // Ultimate fallback - use browser's current offset
            return formatTimezoneOffset(new Date().getTimezoneOffset());
        }
    }

    function normalizeOsVersion(osInfo) {
        // Extract major.minor version: "iOS 16.1.2" → "16.1", "iOS 10" → "10.0"
        const versionString = osInfo || "";
        const match = versionString.match(/(\d+)(?:\.(\d+))?/);
        if (!match) return DEFAULT_OS_VERSION;  // no digits at all
        const [, major, minor] = match;
        return `${major}.${minor ?? '0'}`;      // if no minor, default to .0
    }

    function normalizeLanguage(languageCode) {
        if (!languageCode || typeof languageCode !== 'string') {
            return UNKNOWN_VALUE;
        }

        // Simply extract base language code before dash/underscore
        const cleaned = languageCode.toLowerCase().trim();
        const baseLang = cleaned.split(/[-_]/)[0];

        return baseLang || UNKNOWN_VALUE;
    }

    // These helpers only classify the user agent into coarse, bounded values used for
    // cache-safe CTA repair. They do not collect or emit the fingerprint payload.
    function detectClientMobilePlatform() {
        var userAgent = navigator.userAgent || "";
        if (/iPhone|iPad|iPod/i.test(userAgent)) {
            return PLATFORM.IOS;
        }

        if (/Android/i.test(userAgent)) {
            return PLATFORM.ANDROID;
        }

        return PLATFORM.OTHER;
    }

    function detectClientDeviceTypeName() {
        var userAgent = navigator.userAgent || "";
        if (/iPad/i.test(userAgent)) {
            return DEVICE_TYPES.IPAD;
        }

        if (/iPhone|iPod/i.test(userAgent)) {
            return DEVICE_TYPES.IPHONE;
        }

        if (/Android/i.test(userAgent)) {
            return /Mobile/i.test(userAgent) ? DEVICE_TYPES.ANDROID_MOBILE : DEVICE_TYPES.ANDROID_TABLET;
        }

        return DEVICE_TYPES.OTHER;
    }

    function normalizeFingerprint(raw) {
        return {
            [IpAddress]: raw.ipAddress || UNKNOWN_VALUE,
            [IpV6Address]: raw.ipV6Address || UNKNOWN_VALUE,
            [Locale]: normalizeLanguage(raw.language) || UNKNOWN_VALUE,
            [ScreenWidth]: parseInt(raw.screenWidth) || 0,
            [ScreenHeight]: parseInt(raw.screenHeight) || 0,
            [PixelRatio]: Math.round(raw.pixelRatio) || 1,
            [Timezone]: normalizeTimezone(raw.timezone) || UNKNOWN_VALUE,
            [OsVersion]: normalizeOsVersion(raw.osVersion) || DEFAULT_OS_VERSION,
            [OS]: raw.os || UNKNOWN_VALUE,
            [DeviceType]: raw.deviceType || UNKNOWN_VALUE,
            [CorrelationId]: raw.correlationId || '',
        };
    }

    // Get correlationId from sharedClientStartupContext for telemetry correlation
    function getCorrelationId() {
        try {
            var el = document.getElementById('sharedClientStartupContext');
            var context = el && el.textContent && JSON.parse(el.textContent) || {};
            return context.correlationId || '';
        } catch (error) {
            console.warn('Error getting correlationId:', error);
            return '';
        }
    }

    function getDeviceFingerprint(clientIpAddress, clientIpAddressIPv6, osName, deviceTypeName) {
        // Process IPv4 address (primary IP)
        const originalIpV4 = clientIpAddress || UNKNOWN_VALUE;
        const ipV4 = anonymizeIpAddress(originalIpV4);

        // Process IPv6 address
        const originalIpV6 = clientIpAddressIPv6 || UNKNOWN_VALUE;
        const ipV6 = anonymizeIpAddress(originalIpV6);

        // Create raw fingerprint
        const userAgent = navigator.userAgent || "";

        // Extract OS version from User Agent
        const extractedOsInfo = extractOsInfo(userAgent);

        const rawFingerprint = {
            ipAddress: ipV4,
            ipV6Address: ipV6,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            pixelRatio: window.devicePixelRatio || 1,
            language: navigator.language || "",
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
            osVersion: extractedOsInfo,
            userAgent: userAgent,
            os: osName,
            deviceType: deviceTypeName,
            correlationId: getCorrelationId(),
        };

        // Normalize for cross-platform consistency
        const normalizedFingerprint = normalizeFingerprint(rawFingerprint);

        return normalizedFingerprint;
    }

    function createFingerprintPayload(options) {
        try {
            var currentLocationHref = options.currentLocationHref;
            var clientIpAddress = options.clientIpAddress;
            var clientIpAddressIPv6 = options.clientIpAddressIPv6;
            var osName = options.osName;
            var deviceTypeName = options.deviceTypeName;
            var forButton = options.forButton || false;
            var designVariant = options.designVariant || 'Control';

            const fingerprint = getDeviceFingerprint(clientIpAddress, clientIpAddressIPv6, osName, deviceTypeName);
            const urlObj = new URL(currentLocationHref);
            var existingOrFallbackFromCode = urlObj.searchParams.get('fromcode') || CONSTANTS.DEFAULT_FROMCODE;
            if (forButton) {
                var lastVariantChar = designVariant.charAt(designVariant.length - 1);
                existingOrFallbackFromCode = existingOrFallbackFromCode.slice(0, -4) + 'btn' + lastVariantChar;
            }

            urlObj.searchParams.set('fromcode', existingOrFallbackFromCode);
            const payload = {
                [DeepLinkUrl]: urlObj.toString(),
                [IpAddress]: fingerprint[IpAddress],
                [IpV6Address]: fingerprint[IpV6Address],
                [ScreenWidth]: fingerprint[ScreenWidth],
                [ScreenHeight]: fingerprint[ScreenHeight],
                [PixelRatio]: fingerprint[PixelRatio],
                [Locale]: fingerprint[Locale],
                [Timezone]: fingerprint[Timezone],
                [OsVersion]: fingerprint[OsVersion],
                [OS]: fingerprint[OS],
                [DeviceType]: fingerprint[DeviceType],
                [CorrelationId]: fingerprint[CorrelationId]
            };
            return JSON.stringify(payload);
        } catch (error) {
            console.warn('Error creating fingerprint payload:', error);
            return null;
        }
    }

    async function doFingerprinting(payloadJson, deferredDeepLinkServiceUrl) {
        try {
            const url = deferredDeepLinkServiceUrl;
            // Timeout wrapper (rejects after 2 seconds)
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Fingerprinting timeout (2s)")), FINGERPRINT_API_CALL_TIMEOUT_MS)
            );

            const fetchPromise = fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: payloadJson
            });

            // Wait for either fetch or timeout
            const response = await Promise.race([fetchPromise, timeoutPromise]);

            // If we got here, fetch resolved before timeout
            const text = await response.text().catch(() => null);
            return text;
        } catch (error) {
            console.warn('Error in doFingerprinting:', error);
        }
    }

    // Perform fingerprinting if enabled
    async function performFingerprinting(fingerprintingEnabled, options) {
        if (fingerprintingEnabled) {
            var fingerprintPayloadJson = createFingerprintPayload(options);
            if (fingerprintPayloadJson) {
                await doFingerprinting(fingerprintPayloadJson, options.deferredDeepLinkServiceUrl);
            }
        }
    }

    // Public API
    return {
        extractOsInfo: extractOsInfo,
        anonymizeIpAddress: anonymizeIpAddress,
        formatTimezoneOffset: formatTimezoneOffset,
        normalizeTimezone: normalizeTimezone,
        normalizeOsVersion: normalizeOsVersion,
        normalizeLanguage: normalizeLanguage,
        detectClientMobilePlatform: detectClientMobilePlatform,
        detectClientDeviceTypeName: detectClientDeviceTypeName,
        normalizeFingerprint: normalizeFingerprint,
        getCorrelationId: getCorrelationId,
        getDeviceFingerprint: getDeviceFingerprint,
        createFingerprintPayload: createFingerprintPayload,
        doFingerprinting: doFingerprinting,
        performFingerprinting: performFingerprinting
    };
})();

/**
 * Swaps anchor href/text/aria-label between the data-cta-desktop-* and
 * data-cta-mobile-* attribute pairs based on client UA. No-op when the
 * server-rendered values already match. Bundle prepends mobile-redirect-constants
 * and mobile-redirect-fingerprinting.
 */
function initMobileCtaSwap(config) {
    config = config || {};
    var target = config.target || 'Unauth';
    var pageName = config.pageName || '';
    var pageType = config.pageType || '';

    if (typeof MOBILE_REDIRECT_CONSTANTS === 'undefined' || typeof MobileRedirectFingerprinting === 'undefined') {
        return;
    }

    var CONSTANTS = MOBILE_REDIRECT_CONSTANTS;
    var Fingerprinting = MobileRedirectFingerprinting;
    var PLATFORM = CONSTANTS.PLATFORM;

    var clientPlatform = Fingerprinting.detectClientMobilePlatform();
    var clientIsMobile = clientPlatform === PLATFORM.IOS || clientPlatform === PLATFORM.ANDROID;
    var targetClass = clientIsMobile ? 'mobile' : 'desktop';

    var nodes = document.querySelectorAll('[data-cta-mobile-url], [data-cta-desktop-url]');
    var appliedCount = 0;
    var noOpCount = 0;

    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var desiredUrl = node.getAttribute('data-cta-' + targetClass + '-url');
        var desiredText = node.getAttribute('data-cta-' + targetClass + '-text');
        if (!desiredUrl) {
            continue;
        }

        var changed = false;

        if (node.tagName === 'A' && node.getAttribute('href') !== desiredUrl) {
            node.setAttribute('href', desiredUrl);
            changed = true;
        }

        if (desiredText) {
            var desiredTextTrimmed = desiredText.trim();
            // Replace only the first text node so nested icons/spans are preserved.
            var replacedText = false;
            for (var j = 0; j < node.childNodes.length; j++) {
                var child = node.childNodes[j];
                if (child.nodeType === 3) {
                    if ((child.nodeValue || '').trim() !== desiredTextTrimmed) {
                        child.nodeValue = desiredTextTrimmed;
                        changed = true;
                    }
                    replacedText = true;
                    break;
                }
            }
            if (!replacedText && (node.textContent || '').trim() !== desiredTextTrimmed) {
                node.textContent = desiredTextTrimmed;
                changed = true;
            }

            if (node.hasAttribute('aria-label') && (node.getAttribute('aria-label') || '').trim() !== desiredTextTrimmed) {
                node.setAttribute('aria-label', desiredTextTrimmed);
                changed = true;
            }
        }

        if (changed) {
            appliedCount++;
        } else {
            noOpCount++;
        }
    }

    logSwapTelemetry(target, pageName, pageType, clientPlatform, appliedCount, noOpCount);
}

function logSwapTelemetry(target, pageName, pageType, clientPlatform, appliedCount, noOpCount) {
    try {
        if (!window.standaloneOteLogger) {
            return;
        }

        var emit = function () {
            try {
                // result='Navigate' reuses the existing per-surface Aria table.
                window.standaloneOteLogger.logUnAuthUserAction({
                    id: appliedCount > 0 ? 'herocta_swap_applied' : 'herocta_swap_noop',
                    area: 'CacheFallback',
                    result: 'Navigate',
                    target: target,
                    targetId: 'client_' + clientPlatform +
                        '_applied_' + appliedCount +
                        '_noop_' + noOpCount,
                    pageName: pageName,
                    pageType: pageType
                });
            } catch (innerErr) {
                // Telemetry must never throw.
            }
        };

        if (window.standaloneOteLogger.unAuthLoggerInitialized === true) {
            emit();
        } else {
            window.addEventListener(MOBILE_REDIRECT_CONSTANTS.EVENTS.STANDALONE_OTEL_LOGGER_READY, emit, { once: true });
        }
    } catch (err) {
        // Telemetry must never throw.
    }
}


        document.addEventListener('DOMContentLoaded', function () {
            initMobileCtaSwap({
                target: 'UnauthOdc',
                pageName: 'Unauth-ODC',
                pageType: 'NewUserView'
            });
        });
    
// External: https://res.cdn.office.net/officehub/bundles/unauth-mcm-faq-3ed592771b.js

    const globalPrivacyControlEnabled = navigator.globalPrivacyControl;

    const GPC_DataSharingOptIn = (globalPrivacyControlEnabled) ? false : checkThirdPartyAdsOptOutCookie();

    if(window.onGPCLoaded) {
        window.onGPCLoaded();
    }
    
    function checkThirdPartyAdsOptOutCookie() {
        try {
            const ThirdPartyAdsOptOutCookieName = '3PAdsOptOut';
            var cookieValue = getCookie(ThirdPartyAdsOptOutCookieName);
            return cookieValue != 1;
        } catch {
            return true;
        }
    }

    function getCookie(cookieName) {
        var cookieValue = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
        return (cookieValue) ? cookieValue[2] : '';
    }

// External: https://res.cdn.office.net/officehub/bundles/unauth-vendor-f0ab3fa70e.js
// External: https://res.cdn.office.net/officehub/bundles/unauth-05016c3d1e.js
// External: https://res.cdn.office.net/officehub/bundles/otel-logger-39618b5914375db48ab3.js

        var unauth1dsAnalytics;
        function onDocumentReady(callback) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', callback);
                return;
            }

            callback();
        }

        onDocumentReady(function () {
            HomePage.init();
            var cookieConsentBannerNeeded = false;

            var viewType = 'NewUserView';

            function initializeLogging() {
                var el = document.getElementById('sharedClientStartupContext');
                var sharedClientStartupContext = el && el.textContent && JSON.parse(el.textContent) || {};

                var unauthConfigEl = document.getElementById('unauthConfig');
                var unauthConfig = unauthConfigEl && unauthConfigEl.textContent && JSON.parse(unauthConfigEl.textContent) || {};
                var analyticsConsentRequired = cookieConsentBannerNeeded && !unauthConfig.userConsentStatus.AnalyticsCookiesConsented;

                function _getWcpUserConsentDetails() {
                    return {
                        Required: unauthConfig.userConsentStatus.EssentialCookiesConsented,
                        Analytics: unauthConfig.userConsentStatus.AnalyticsCookiesConsented,
                        SocialMedia: unauthConfig.userConsentStatus.SocialMediaCookiesConsented,
                        Advertising: unauthConfig.userConsentStatus.AdvertisingCookiesConsented
                    };
                }

                unauth1dsAnalytics = new oneDS.ApplicationInsights();
                var unauth1dsAnalyticsConfigconfig = {
                    instrumentationKey: "aa86c364bc9e4a5a94a6b232c110af26-72da2ec9-498a-44df-8cca-7fd88cf654c1-7527",
                    channelConfiguration:{ // Post channel configuration
                        eventsLimitInMem: 5000 //5000 is the suggested eventsLimitInMem from the 1DS SDK for improved telemetry buffering efficiency and reduce the frequency of flush operations
                    },
                    propertyConfiguration: { // Properties Plugin configuration
                        gpcDataSharingOptIn: false,
                        env: "PROD", 
                        callback: {
                           userConsentDetails: _getWcpUserConsentDetails
                        },
                    },
                    webAnalyticsConfiguration:{ // Web Analytics Plugin configuration
                        urlCollectQuery: false,
                        autoCapture: {
                          lineage: true,
                          jsError: false
                        },
                        coreData: { 
                            pageName: "UnauthOhp",
                            market: "en-US"
                        },
                    }
                };

                unauth1dsAnalytics.initialize(unauth1dsAnalyticsConfigconfig, []);
                unauth1dsAnalytics.captureContentUpdate();
            }

            initializeLogging();

            // log OTEL PageView event
            if (true) {
                var fromCode = '';
                function initializeOtelLogging() {
                    // TODO: We have to eventually move away from taking dependency on embedded config.
                    var el = document.getElementById('sharedClientStartupContext');
                    var sharedClientStartupContext = el && el.textContent && JSON.parse(el.textContent) || {};

                    var unauthConfigEl = document.getElementById('unauthConfig');
                    var unauthConfig = unauthConfigEl && unauthConfigEl.textContent && JSON.parse(unauthConfigEl.textContent) || {};
                    var analyticsConsentRequired = cookieConsentBannerNeeded && !unauthConfig.userConsentStatus.AnalyticsCookiesConsented;
                    fromCode = sharedClientStartupContext.fromcode || '';

                    var otelContext = {
                        appName: sharedClientStartupContext.oTelAppName,
                        appPlatform: sharedClientStartupContext.oTelAppPlatform,
                        appWorkload: 'Web', // TODO: Replace the hardcoded value
                        appWorkloadType: 'Web-Cosmic',
                        bundleBuildDate: sharedClientStartupContext.buildDateUtc,
                        bundleBuildId: sharedClientStartupContext.buildId,
                        correlationId: sharedClientStartupContext.correlationId,
                        deploymentEnvironment: sharedClientStartupContext.deploymentEnvironment,
                        domainOrigin: sharedClientStartupContext.domainOrigin,
                        eventCategoryConfig: {
                            actionEnabled: sharedClientStartupContext.oTelClickEnabled,
                            diagnosticEnabled: sharedClientStartupContext.oTelDiagnosticEnabled,
                            errorEnabled: sharedClientStartupContext.oTelErrorEnabled,
                            impressionEnabled: sharedClientStartupContext.oTelImpressionEnabled,
                            pageViewEnabled: sharedClientStartupContext.oTelPageViewEnabled,
                            perfEnabled: sharedClientStartupContext.oTelPerfEnabled,
                            requestEnabled: sharedClientStartupContext.oTelRequestEnabled,
                            featureEnabled: sharedClientStartupContext.oTelFeatureEnabled
                            },
                        flights: sharedClientStartupContext.flights,
                        isCorpNet: sharedClientStartupContext.corpNet,
                        isTestTraffic: sharedClientStartupContext.testTraffic,
                        oTelEnabled: sharedClientStartupContext.oTelEnabled,
                        oTelAriaTenant: sharedClientStartupContext.oTelAriaTenant,
                        oTelAriaNameSpace: sharedClientStartupContext.oTelNameSpace,
                        sessionId: sharedClientStartupContext.sessionId,
                        serverLocation: sharedClientStartupContext.geoName,
                        requestOrigin: sharedClientStartupContext.requestOrigin,
                        initialPageName: "Unauth-ODC" || 'OfficeHome',
                        initialPageType: viewType,
                        fromCode: fromCode,
                    };
                    window.standaloneOteLogger && window.standaloneOteLogger.initializeUnAuthOTel(otelContext);
                }

                function addUnauthOtelTelemetry(){
                    var pageName = "Unauth-ODC" || 'OfficeHome';
                    var clickableElements = document.querySelectorAll('button, a');
                    for (var i = 0; i < clickableElements.length; i++) {
                        clickableElements[i].addEventListener('click', function() {
                            var elementId = this && this.id;
                            if (elementId) {
                                var actionResult = '';
                                var actionTarget = '';
                                var actionArea = '';
                                var actionTargetId = '';
                            // IMG page: Handle dynamic img-prompt-{guid}
                            if (elementId.startsWith('img-prompt-')) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthImg';
                                actionTargetId = elementId;
                                actionArea = 'ImgPromptCarousel';
                            }
                            // Create page: Handle dynamyc ids
                            else if (elementId.startsWith('create-prompt-grid')) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthCreate';
                                actionTargetId = elementId;
                                actionArea = 'CreatePromptGrid';
                            }
                            else if (elementId.startsWith('create-app-template-link-')) {
                                actionResult = 'Get';
                                actionTarget = 'UnauthCreate';
                                actionTargetId = elementId;
                                actionArea = 'CreateAppTemplates';
                            }
                            else if (elementId.startsWith('create-prompt-card')) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthCreate';
                                actionTargetId = elementId;
                                actionArea = 'CreatePrompt';
                            }
                            else if (elementId.startsWith('ccm-module-')) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthCcm';
                                actionTargetId = elementId;
                                actionArea = 'CcmModule';
                            }
                            else if (elementId.startsWith('ccm-download-')) {
                                actionResult = 'Navigate';
                                actionTarget = 'UnauthCcm';
                                actionTargetId = elementId;
                                actionArea = 'CcmDownload';
                            }
                            else if (elementId.startsWith('faq-item-') || elementId === 'faqExpandAll') {
                                actionResult = 'Navigate';
                                actionTargetId = elementId;
                                if (pageName.indexOf('CCM') >= 0) {
                                    actionTarget = 'UnauthCcm';
                                    actionArea = 'CcmFaq';
                                } else if (pageName.indexOf('ODC') >= 0) {
                                    actionTarget = 'UnauthOdc';
                                    actionArea = 'OdcFaq';
                                } else if (pageName.indexOf('IMG') >= 0) {
                                    actionTarget = 'UnauthImg';
                                    actionArea = 'ImgFaq';
                                } else if (pageName.indexOf('MCM') >= 0) {
                                    actionTarget = 'UnauthMcm';
                                    actionArea = 'McmFaq';
                                } else {
                                    actionTarget = 'Other';
                                    actionArea = 'Faq';
                                }
                            }
                            else if (elementId.startsWith('odc-promptlink-')) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthOdc';
                                actionTargetId = elementId;
                                actionArea = 'OdcPromptCarousel';
                            }
                            else if (elementId.startsWith('odc-module-promptlink-')) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthOdc';
                                actionTargetId = elementId;
                                actionArea = 'OdcPromptModule';
                            }
                            else if (elementId.startsWith('mcm-promptlink-')) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthMcm';
                                actionTargetId = elementId;
                                actionArea = 'McmPromptCarousel';
                            }
                            else if (elementId.startsWith('prompt-pill-')) {
                                // Bebop Prompt Input Pills (Popular, Ask, Learn, Create, Analyze, Code)
                                actionResult = 'Navigate';
                                actionTargetId = elementId;
                                if (pageName.indexOf('PromptGallery') >= 0) {
                                    actionTarget = 'UnauthPromptGallery';
                                    actionArea = 'PromptGalleryBebopPills';
                                } else if (pageName.indexOf('CCM') >= 0) {
                                    actionTarget = 'UnauthCcm';
                                    actionArea = 'CcmBebopPills';
                                } else {
                                    actionTarget = 'UnauthPromptGallery';
                                    actionArea = 'BebopPills';
                                }
                            }
                            else if (elementId.startsWith("pg-app-")) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthPromptGallery';
                                actionTargetId = elementId;
                                actionArea = 'PromptGalleryApps';
                            }
                            else if (elementId.startsWith("pg-copilot-module-")) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthPromptGallery';
                                actionTargetId = elementId;
                                actionArea = 'PromptGalleryCopilotModules';
                            }
                            else if (elementId.startsWith("pg-module-")) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthPromptGallery';
                                actionTargetId = elementId;
                                actionArea = 'PromptGalleryModules';
                            }
                            else if (elementId.startsWith("pg-featured-promptlink-")) {
                                // PromptGallery Featured Cards
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthPromptGallery';
                                actionTargetId = elementId;
                                actionArea = 'PromptGalleryFeatured';
                            }
                            else if (elementId.startsWith("pg-task-catchup-promptlink-") ||
                                elementId.startsWith("pg-task-ask-promptlink-") ||
                                elementId.startsWith("pg-task-learn-promptlink-") ||
                                elementId.startsWith("pg-task-create-promptlink-") ||
                                elementId.startsWith("pg-task-analyze-promptlink-") ||
                                elementId.startsWith("pg-task-prepare-promptlink-") ||
                                elementId.startsWith("pg-task-understand-promptlink-") ||
                                elementId.startsWith("pg-task-code-promptlink-") ||
                                elementId.startsWith("pg-task-execute-promptlink-") ||
                                elementId.startsWith("pg-task-find-promptlink-") ||
                                elementId.startsWith("pg-task-edit-promptlink-") ||
                                elementId.startsWith("pg-task-schedule-promptlink-")) {
                                    actionResult = 'SignIn';
                                    actionTarget = 'UnauthPromptGallery';
                                    actionTargetId = elementId;
                                    actionArea = 'PromptGalleryTasks';
                            }
                            else {
                                switch (elementId) {
                                    // Hero area clicks
                                    case 'hero-banner-sign-in-to-office-365-link':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Office';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-sign-back-in-to-office-365-link':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Office';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-get-office-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-free-upsell-v1-link':
                                        actionResult = 'SignUp';
                                        actionTarget = 'Office';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-see-plans-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-free-version-microsoft-365-link':
                                        actionResult = 'SignUp';
                                        actionTarget = 'Microsoft365';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-premium-plans-microsoft-365-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Microsoft365';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-sign-in-microsoft-365-link':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Microsoft365';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-m365-learn-more-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Microsoft365';
                                        actionTargetId = 'LearnMoreM365Copilot';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-download-desktop-apps-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Microsoft365';
                                        actionArea = 'Hero';
                                        break;
                                    // UniversalHeader area clicks
                                    case 'BuyOffice365':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'UniversalHeader';
                                        break;
                                    case 'shy-header-consumer-signup-for-free':
                                        actionResult = 'SignUp';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-consumer-go-premium':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-consumer-sign-in':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-commercial-try-for-free':
                                        actionResult = 'SignUp';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Business';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-commercial-see-plans-and-pricing':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Business';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-commercial-sign-in':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Business';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-edu-sign-up':
                                        actionResult = 'SignUp';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Education';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-edu-sign-in':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Education';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'unauth-tab-home':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'Tabs';
                                        break;
                                    case 'unauth-tab-commercial':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Business';
                                        actionArea = 'Tabs';
                                        break;
                                    case 'unauth-tab-edu':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Education';
                                        actionArea = 'Tabs';
                                        break;
                                    case 'unauth-tab-home--footer':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'Tabs';
                                        break;
                                    case 'unauth-tab-commercial--footer':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Business';
                                        actionArea = 'Tabs';
                                        break;
                                    case 'unauth-tab-edu--footer':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Education';
                                        actionArea = 'Tabs';
                                        break;
                                    // Mobile download clicks
                                    case 'app-store-link':
                                        actionResult = 'Download';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Mobile';
                                        actionArea = 'Footer';
                                        break;
                                    case 'mobile-app-banner-app-store-link':
                                        actionResult = 'Download';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Mobile';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-sign-in-copilot-link':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Copilot';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-learn-more-about-copilot-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Copilot';
                                        actionTargetId = 'LearnMoreAboutCopilot';
                                        actionArea = 'Hero';
                                        break;
                                    //Unuath MCM Additions
                                    case "mcm-hero-banner-signin":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroSignIn';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-background":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroSignInBG';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-secondary":
                                        actionResult = 'Get';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroSecondary';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-personalized-sign-in":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroPersonalizedSignIn';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-switch-sign-in":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroSwitchAccountSignIn';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-switch-account":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroSwitchAccount';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-forget-account":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroForgetAccount';
                                        actionArea = 'McmHero';
                                        break;
                                    case "module-cta-search":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaSearch';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-create":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaCreate';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-chat":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaChat';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-apps":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaApps';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-voice":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaVoice';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-agents":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaAgents';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-mobile-chat":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaMobileChat';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-search-v2":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaSearch';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-create-v2":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaCreate';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-chat-v2":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaChat';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-add-files-mv":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaAddFiles';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-notebook-mv":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaNotebook';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-desktop-download":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaDownloadDesktop';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-mobile-download":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaDownloadMobile';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "carousel-nav-prev":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselPrevious';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case "carousel-nav-next":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselNext';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case 'mcm-view-all-apps':
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = elementId;
                                        actionArea = 'McmCopilotPromptModule';
                                        break;
                                    // Unauth ODC redesign additions
                                    case "odc-hero-signin":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcHeroSignIn';
                                        actionArea = 'OdcHero';
                                        break;
                                    case "odc-hero-secondary":
                                        actionResult = 'Get';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcHeroSecondary';
                                        actionArea = 'OdcHero';
                                        break;
                                    case "app-module-cta-0":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'AppModuleCta0';
                                        actionArea = 'OdcAppModule';
                                        break;
                                    case "app-module-cta-1":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'AppModuleCta1';
                                        actionArea = 'OdcAppModule';
                                        break;
                                    case "app-module-cta-2":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'AppModuleCta2';
                                        actionArea = 'OdcAppModule';
                                        break;
                                    case "app-module-cta-3":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'AppModuleCta3';
                                        actionArea = 'OdcAppModule';
                                        break;
                                    // Remove these odc-module-excel|word|powerpoint when rollout ODC turbo prompt
                                    case "odc-module-excel":
                                    case "odc-module-word":
                                    case "odc-module-powerpoint":
                                        actionResult = 'SignIn';
                                        actionTargetId = elementId;
                                        if (pageName.indexOf('PromptGallery') >= 0) {
                                            actionTarget = 'UnauthPromptGallery';
                                            actionArea = 'PromptGalleryModule';
                                        } else {
                                            actionTarget = 'UnauthOdc';
                                            actionArea = 'OdcPromptModule';
                                        }
                                        break;
                                    case "odc-cta-prompt-gallery":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptGalleryLink';
                                        actionArea = 'OdcPromptModule';
                                        break;
                                    case "odc-module-cta-search":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptModuleCtaSearch';
                                        actionArea = 'CopilotOdcPromptModule';
                                        break;
                                    case "odc-module-cta-create":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptModuleCtaCreate';
                                        actionArea = 'CopilotOdcPromptModule';
                                        break;
                                    case "odc-module-cta-chat":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptModuleCtaChat';
                                        actionArea = 'CopilotOdcPromptModule';
                                        break;
                                    case "odc-module-cta-apps":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptModuleCtaApps';
                                        actionArea = 'CopilotOdcPromptModule';
                                        break;
                                    // IMG page - Hero
                                    case "img-hero-banner-signin":
                                    case "img-hero-banner-breadcrumb-link":
                                    case "img-hero-banner-background":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImg';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgHero';
                                        break;
                                    // IMG page - Info Text Grid
                                    case "info-text-grid-item-1":
                                    case "info-text-grid-item-2":
                                    case "info-text-grid-item-3":
                                    case "info-text-grid-item-4":
                                    case "info-text-grid-item-5":
                                    case "info-text-grid-item-6":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImg';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgInfoTextGrid';
                                        break;
                                    // IMG page - Info Card Grid
                                    case "info-card-link_1":
                                    case "info-card-link_2":
                                    case "info-card-link_3":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImg';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgInfoCardGrid';
                                        break;
                                    // IMGED page - Hero
                                    case "img-ed-hero-banner-breadcrumb-link":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdHero';
                                        break;
                                    case "img-ed-hero-banner-signin":
                                    case "img-ed-hero-banner-background":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdHero';
                                        break;
                                    // IMGED page - AppsModules/Accordion Section
                                    case "img-ed-app-module-cta-0":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdAppModule';
                                        break;
                                    case "img-ed-app-module-cta-1":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdAppModule';
                                        break;
                                    case "img-ed-app-module-cta-2":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdAppModule';
                                        break;
                                    case "img-ed-app-module-cta-3":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdAppModule';
                                        break;
                                    // IMGED page - Create Section
                                    case "img-ed-create-cta":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdCreate';
                                        break;
                                    // IMGED page - Info Card Grid WIP
                                    case "img-ed-info-card-link_1":
                                    case "img-ed-info-card-link_2":
                                    case "img-ed-info-card-link_3":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdInfoCardGrid';
                                        break;
                                    // PromptGallery Featured Sign In
                                    case "pg-featured-signin":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryFeatured';
                                        break;
                                    // PromptGallery Hero Actions
                                    case "pg-hero-banner-background":
                                    case "pg-hero-signin":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryHero';
                                        break;
                                    case "pg-hero-breadcrumb-link":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryHero';
                                        break;
                                    // Prompt Gallery Apps Navigation Pills (Word, Excel, PowerPoint, Outlook, Copilot)
                                    case 'pg-pill-app-word':
                                    case 'pg-pill-app-excel':
                                    case 'pg-pill-app-powerpoint':
                                    case 'pg-pill-app-outlook':
                                    case 'pg-pill-app-copilot':
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryApps';
                                        break;
                                    // Prompt Gallery Task Navigation Pills (Catch up, Ask, Learn, Create, etc.)
                                    case 'pg-pill-task-catchup':
                                    case 'pg-pill-task-ask':
                                    case 'pg-pill-task-learn':
                                    case 'pg-pill-task-create':
                                    case 'pg-pill-task-analyze':
                                    case 'pg-pill-task-prepare':
                                    case 'pg-pill-task-understand':
                                    case 'pg-pill-task-code':
                                    case 'pg-pill-task-execute':
                                    case 'pg-pill-task-find':
                                    case 'pg-pill-task-edit':
                                    case 'pg-pill-task-schedule':
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryTasks';
                                        break;
                                    // Task Section Sign In Button
                                    case 'pg-task-signin':
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryTasks';
                                        break;
                                    // Create page - Hero
                                    case "create-hero-banner-signin":
                                    case "create-hero-banner-breadcrumb-link":
                                    case "create-hero-banner-background":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthCreate';
                                        actionTargetId = elementId;
                                        actionArea = 'CreateHero';
                                        break;
                                    // Create page - Logo Wall
                                    case "create-logo-wall-card-1":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthCreate';
                                        actionTargetId = elementId;
                                        actionArea = 'CreateLogoWall';
                                        break;
                                    case "create-logo-wall-card-2":
                                    case "create-logo-wall-card-3":
                                    case "create-logo-wall-card-4":
                                    case "create-logo-wall-card-5":
                                    case "create-logo-wall-card-6":
                                    case "create-logo-wall-card-7":
                                        actionResult = 'Get';
                                        actionTarget = 'UnauthCreate';
                                        actionTargetId = elementId;
                                        actionArea = 'CreateLogoWall';
                                        break;
                                    // Create page - App Templates
                                    case 'create-pill-Word':
                                    case 'create-pill-Excel':
                                    case 'create-pill-PowerPoint':
                                    case 'create-pill-Designer':
                                    case 'create-pill-Clipchamp':
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthCreate';
                                        actionTargetId = elementId;
                                        actionArea = 'CreateAppTemplates';
                                        break;
                                     // ODC Bebop
                                    case 'odc-module-cta-create-bebop':
                                    case 'odc-module-cta-files-bebop':
                                    case 'odc-module-cta-analyst-bebop':
                                    case 'odc-module-cta-slides-bebop':
                                    case 'odc-mobile-module-cta-voice':
                                    case 'view-all-apps':
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = elementId;
                                        actionArea = 'OdcCopilotPromptModule';
                                        break;
                                    case "odc-module-cta-desktop-download":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = elementId;
                                        actionArea = 'OdcPromptModule';
                                        break;
                                    case "odc-module-cta-mobile-download":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = elementId;
                                        actionArea = 'OdcPromptModule';
                                        break;
                                    // CCM page
                                    case 'ccm-hero-primary-cta':
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthCcm';
                                        actionTargetId = 'CcmHeroPrimaryCta';
                                        actionArea = 'CcmHero';
                                        break;
                                    case 'ccm-hero-secondary-cta':
                                        actionResult = 'Get';
                                        actionTarget = 'UnauthCcm';
                                        actionTargetId = 'CcmHeroSecondaryCta';
                                        actionArea = 'CcmHero';
                                        break;
                                    case 'ccm-hero-banner-signin':
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthCcm';
                                        actionTargetId = 'CcmHeroSignIn';
                                        actionArea = 'CcmHero';
                                        break;
                                    case 'ccm-hero-banner-background':
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthCcm';
                                        actionTargetId = 'CcmHeroSignInBG';
                                        actionArea = 'CcmHero';
                                        break;
                                    default:
                                        actionResult = 'Navigate';
                                        actionTarget = 'Other';
                                }
                            }
                            window.standaloneOteLogger && window.standaloneOteLogger.logUnAuthUserAction({ id: elementId, area: actionArea, result: actionResult, target: actionTarget, targetId: actionTargetId, pageName: pageName, pageType: viewType});
                        }
                    });
                    }

                    if (!true || (isSessionStorageAvailable && sessionStorage.getItem('DefaultSignInCalledBefore') === 'true')) {
                        // only log page view if page is displayed
                        window.standaloneOteLogger && window.standaloneOteLogger.logPageView({ pageName: pageName, pageType: viewType, isIntentional: true, fromCode: fromCode}, true);
                    }

                    if (true) {
                        // Derive surface name from page name
                        var surface = (pageName.toLowerCase().indexOf('mcm') >= 0) ? 'mcm'
                                    : (pageName.toLowerCase().indexOf('ccm') >= 0) ? 'ccm'
                                    : 'office';

                        function firePageLevelTelemetry() {

                            // UnauthPage_ScrollDepth: fire at 25/50/75/100% thresholds (once each)
                            var scrollThresholds = [25, 50, 75, 100];
                            var firedThresholds = {};
                            window.addEventListener('scroll', function() {
                                var scrollableHeight = document.body.scrollHeight - window.innerHeight;
                                if (scrollableHeight <= 0) return;
                                var scrollPct = (window.scrollY / scrollableHeight) * 100;
                                scrollThresholds.forEach(function(t) {
                                    if (!firedThresholds[t] && scrollPct >= t) {
                                        firedThresholds[t] = true;
                                        window.standaloneOteLogger && window.standaloneOteLogger.logUnAuthUserAction({
                                            id: 'scroll-depth-' + t,
                                            area: 'PageEngagement',
                                            result: 'Scroll',
                                            target: 'Unauth' + (surface.charAt(0).toUpperCase() + surface.slice(1)),
                                            targetId: 'ScrollDepth' + t,
                                            pageName: pageName,
                                            pageType: viewType
                                        });
                                    }
                                });
                            }, { passive: true });

                            // UnauthPage_DwellTime: fire on tab hide / page exit
                            var pageLoadTime = performance.now();
                            var dwellTimeFired = false;
                            function logDwellTime() {
                                if (dwellTimeFired) return;
                                dwellTimeFired = true;
                                var durationMs = Math.round(performance.now() - pageLoadTime);
                                window.standaloneOteLogger && window.standaloneOteLogger.logUnAuthUserAction({
                                    id: 'dwell-time-' + durationMs,
                                    area: 'PageEngagement',
                                    result: 'DwellTime',
                                    target: 'Unauth' + (surface.charAt(0).toUpperCase() + surface.slice(1)),
                                    targetId: 'DwellTime',
                                    pageName: pageName,
                                    pageType: viewType
                                });
                            }
                            document.addEventListener('visibilitychange', function() {
                                if (document.visibilityState === 'hidden') logDwellTime();
                            });
                            window.addEventListener('pagehide', logDwellTime);
                        }

                        // logUnAuthUserAction has internal queuing, so safe to call immediately
                        firePageLevelTelemetry();
                    }
                }
                initializeOtelLogging();
                addUnauthOtelTelemetry();
            }
        });
    
// External: https://www.microsoft.com/onerfstatics/marketingsites-eas-prod/shell/_scrf/js/themes=default/54-af9f9f/fb-2be034/21-f9d187/b0-50721e/d8-97d509/40-0bd7f9/ea-f1669e/9d-c6ea39/62-a72447/3e-a4ee50/7c-0bd6a1/60-37309a/db-bc0148/dc-7e9864/6d-c07ea1/6f-dafe8c/f6-aa5278/e6-5f3533/6d-1e7ed0/b7-cadaa7/62-2741f0/ca-40b7b0/4e-ee3a55/3e-f5c39b/c3-6454d7/f9-7592d3/d0-e64f3e/92-10345d/79-499886/7e-cda2d3/e7-1fe854/66-9d711a/38-b93a9e/de-884374/1f-100dea/33-abe4df/8f-61bee0?ver=2.0&_cf=02242021_3231&iife=1
// External: https://mem.gfx.ms/meversion?partner=office&market=en-us&uhf=1

        var appId = 'Unauth-ODC';
        var el = document.getElementById('unauthConfig');
        var config = el && JSON.parse(el.textContent) || {};
        var signInUrl = config.loginUrl;
        if (true && appId === 'Unauth-ODC') {
            if (isSessionStorageAvailable && sessionStorage.getItem('DefaultSignInCalledBefore') !== 'true') {
                var myConfigOptions = {
                    msaConfig: { replyUri: 'https://www.office.com/', host: 'login.live.com' },
                    aadConfig: { replyUri: 'https://www.office.com/', host: 'login.microsoftonline.com', appId: '4345a7b9-9a63-4910-a426-35363201d503' },
                    preferredIdp: AuthType.aad,
                    enableConsoleLogging: false,
                    msaFedEnabled: true
                };

                DefaultSignInHandler.DefaultSignInAdapter.signIn(signInUrl, myConfigOptions, 1000, appId).then(function (loginUrl) {
                    if (isSessionStorageAvailable) {
                        sessionStorage.setItem('DefaultSignInCalledBefore', 'true');
                    }

                    if (loginUrl) {
                        window.location.href = loginUrl;
                    } else {
                        window.standaloneOteLogger && window.standaloneOteLogger.logPageView({ pageName: 'OfficeHome', pageType: 'NewUserView', isIntentional: true });
                    }
                });
            }
        }

        function setShellOptions(shellOptions) {

            if (window.msCommonShell) {
                window.msCommonShell.load(shellOptions);
            } else {
                window.onShellReadyToLoad = function () {
                    window.onShellReadyToLoad = null;
                    window.msCommonShell.load(shellOptions);
                }
            }
        }

            var SendMeControlSignInEvent = function () {
            unauth1dsAnalytics && unauth1dsAnalytics.isInitialized() && unauth1dsAnalytics.capturePageAction(document.getElementById('meControl'), { isAuto: false, behavior: oneDS.Behavior.SIGNIN, actionType: oneDS.ActionType.CLICKLEFT });

            if (typeof StandaloneAriaLogger !== 'undefined' && typeof StandaloneAriaLogger.Logger !== 'undefined' && typeof StandaloneAriaLogger.Logger.LogUnauthClick !== 'undefined') {
                StandaloneAriaLogger.Logger.LogUnauthClick('NewUserView', 'meLnkSignin');
            }

            window.standaloneOteLogger && window.standaloneOteLogger.logUnAuthUserAction({ id: "meLnkSignin", area: "MeControl", result: "SignIn", target: "UnauthOdc", pageName: appId ? appId : "OfficeHome", pageType: "NewUserView" });
        }

        function SetConsent() {
            var cookieConsentBannerNeeded = false;
            if (cookieConsentBannerNeeded) {
                var mscc = window.mscc;
                // Remove this SetConsent when WCP is 100%
                if (!window.WcpConsent && mscc && !mscc.hasConsent()) {
                    mscc.setConsent();
                }
            }
        }

        var shellOptions = {
            meControlOptions: {
                rpData: {
                    aadInfo: {
                        signInUrl: signInUrl,
                        signOutUrl: 'https://login.microsoft.com/logout.srf'
                    },
                    msaInfo: {
                        meUrl: null
                    },
                    preferredIdp: 'aad'
                },
                events: {
                    onEventLog: function (eventId) {
                            switch (eventId) {
                            case 'SignIn':
                                SetConsent();
                                SendMeControlSignInEvent();
                                break;
                            default:
                                return;
                        }
                    }
                }
            }
        };

        setShellOptions(shellOptions);


                    if (window.history && window.history.replaceState) {
                        config.pathAndQuery && window.history.replaceState(window.history.state || {}, '', config.pathAndQuery);
                    }
                    

            var aadUserForgetUrlFormat = "https://login.microsoftonline.com/forgetuser?sessionid=";
    
function clearStorage() {
    try {
        if (window && window.sessionStorage) {
            clearStorageWithExceptions(window.sessionStorage, ['DefaultSignInCalledBefore', 'msameid']);
        }
        if (window && window.localStorage) {
            var workload = '';
            if (document && document.getElementById) {
                var workloadElem = document.getElementById('workload');
                if (workloadElem) {
                    workload = workloadElem.innerText;
                }
            }
            if (window.hwaContentVersion) {
                workload = 'pwa';
            }
            if (workload && workload === 'pwa') {
                clearStorageWithExceptions(window.localStorage, ['officeHome-']);
            }
            else {
                var exceptions = [];
                if (window.location.pathname === '/logout') {
                    exceptions.push('AbtActivity');
                }
                clearStorageWithExceptions(window.localStorage, exceptions);
            }
        }
        if (window && window.indexedDB) {
            if (window.indexedDB.databases) {
                window.indexedDB.databases().then(function (dbs) {
                    if (dbs) {
                        dbs.forEach(function (db) {
                            if (db && db.name && (db.name.indexOf('ai-hub') >= 0 || db.name.indexOf('office-start-simple-persistence') >= 0 || db.name.indexOf('edgeworth-') === 0)) {
                                window.indexedDB.deleteDatabase(db.name);
                            }
                        });
                    }
                });
            }
            window.indexedDB.deleteDatabase('fluidDriverCache');
        }
    }
    catch (err) {
        console.log(err);
    }
}
function clearStorageWithExceptions(storage, exceptions) {
    if (!exceptions || exceptions.length === 0) {
        storage.clear();
        return;
    }
    var keys = [];
    for (var i = 0; i < storage.length; i++) {
        keys.push(storage.key(i));
    }
    var _loop_1 = function (i) {
        var key = keys[i];
        var shouldDelete = true;
        exceptions.forEach(function (val) {
            if (key !== null && key.lastIndexOf(val) !== -1) {
                shouldDelete = false;
            }
        });
        if (key && shouldDelete) {
            storage.removeItem(key);
        }
    };
    for (var i = 0; i < keys.length; i++) {
        _loop_1(i);
    }
}
clearStorage();

// External: https://res.cdn.office.net/officehub/bundles/unauth-odc-scripts-6fc52434d3.js
// External: https://res.cdn.office.net/officehub/bundles/unauth-page-performance-fe909b4df2.js

            var perf = window.createPagePerformance && window.createPagePerformance('UnauthOdc');
            if (perf) { perf.logPageLoaded(); perf.setupSectionTracking(); }
        
// External: https://res.cdn.office.net/admincenter/admin-main/2026.5.28.5/floodgate.en.bundle.js
