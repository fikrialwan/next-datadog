"use client";

import { datadogLogs } from "@datadog/browser-logs";
import { datadogRum } from "@datadog/browser-rum";
import { CONFIG } from "~/lib/utils/config";

datadogRum.init({
  applicationId: CONFIG.APPLICATION_ID,
  clientToken: CONFIG.CLIENT_TOKEN,
  site: CONFIG.SITE,
  service: CONFIG.SERVICE,
  env: CONFIG.ENV,
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
  // Specify URLs to propagate trace headers for connection between RUM and backend trace
  allowedTracingUrls: [
    { match: "https://example.com/api/", propagatorTypes: ["tracecontext"] },
  ],
});

datadogLogs.init({
  clientToken: CONFIG.CLIENT_TOKEN,
  site: CONFIG.SITE,
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
});

export default function DatadogInit() {
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  console.log("datadog called");
  return null;
}
