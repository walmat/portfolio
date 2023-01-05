import { datadogRum } from '@datadog/browser-rum'

export const initialize = () => {
  datadogRum.init({
    applicationId: '73dc7aff-2938-4468-b0d8-42eb534fcce1',
    clientToken: 'pube79770ecf28983f42edcc8bd166d81ec',
    site: 'us5.datadoghq.com',
    service: 'portfolio',

    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sampleRate: 100,
    premiumSampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel: 'mask-user-input'
  })

  datadogRum.startSessionReplayRecording()
}
