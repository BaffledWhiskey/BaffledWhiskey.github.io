---
layout: blogpost
title: "The NHS App: How It Works and Why You Should Use It"
url: /articles/science/
imageurl: john-cameron-QtAGmfK8qYM-unsplash.jpg
imageAuthorLink: https://unsplash.com/@john_cameron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
imageAuthorName: John Cameron
imageWebsiteLink: https://unsplash.com/s/photos/covid-19-app?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
imageWebsiteName: Unsplash
mainTitle: The NHS App
subTitle: "How it works and why you should use it"
authorID: mL1
date: "2020-09-28T13:44:00"
tags: [Covid-19, Contact Tracing, Conspiracy Theories, Privacy]
desc: "Why you should download the NHS contact tracing app"
---

Since the release of the NHS Covid-19 app the internet has (as per usual) been awash with ridiculous conspiracies questioning it's privacy and integrity. With the UK in the midst of a second wave it is crucial we all play our part to bring the cases back down and prevent more unnecessary deaths and attempt to salvage what's left of the economy. This article aims to dispel a few of the concerns you might have about the app and to explain a bit about how it works.

First things first, how does it work? The app uses something called the <a href="https://www.google.com/covid19/exposurenotifications/" target="_blank">Exposure Notification System</a> which is an API written by both Google and Apple to securely track and trace those who have come into contact with a positive case. An API is simply a piece of software that is designed to be used by other developers in order to achieve a specific goal (such as tracking cases). This means that the bulk of the functionality for the app comes from the <a href="https://www.google.com/covid19/exposurenotifications/" target="_blank">Exposure Notification System</a> and very little is handled by the app itself.

The <a href="https://www.google.com/covid19/exposurenotifications/" target="_blank">Exposure Notification System</a> maintains your privacy in a couple of ways. Firstly, it does not track your location, you read correctly, no GPS tracking. In fact, at the top of the <a href="https://developers.google.com/android/exposure-notifications/exposure-notifications-api#architecture:~:text=your%20app%20doesn't%20require%20and%20can't%20include%20ACCESS_COARSE_LOCATION%2C%20ACCESS_FINE_LOCATION">documentation</a> it is clearly stated that you don't need to and cannot track neither vague or specific location in order to create a working app. Instead the system uses Bluetooth to record anonymous ID's of phones running the same software that have come into close contact with you. The ID's change every few minutes and are not tied to you in any way. This means that the app can know your phone was near enough another phone for you to be at risk if they end up being a positive case. However, it cannot know where both those phones were, who owns either phone or anything about you at all.

As you go about your daily life using the new NHS app your phone will be silently collecting anonymous ID's from other phones within range. It will calculate a risk value based upon the strength of Bluetooth signals and determine if you pass a certain threshold to count you as a close contact of another ID (notice how I don't say person since the app doesn't know who you are). Servers are the main responsibility of the individual app developers, these are used to send push notifications to potentially exposed users. Very little data is sent to servers, the data that is sent is unidentifiable and so your privacy is not at risk at any point.

A unique feature of the NHS app is the QR code scanner for locations visited. This is a great feature as it relieves pubs and other venues from the tedious admin of manually recording visitors, this also means you won't have your personal information collected by said venue. Not that anyone should be a regular pub/venue visitor at this point in time anyway but that's beside the point.

For those who claim they don't want the government tracking them I hope you can see from what I have already said that they are unable to. Furthermore, if you are really that concerned about being tracked may I suggest you throw your iPhone or Android phone in the bin. Google, Apple and Facebook are notorious for tracking your whereabouts, they do this for numerous reasons. Some that benefit you, some that don't. They have profiles built for all of their users in order to feed you relevant ads for example. Google Maps by default tracks you all the time in order to have accurate live traffic. Personally I keep all of this turned on, I enjoy the features that I get because of it and as such I see it as worthwhile. Even if the government did track you, wouldn't it still be worth it to get this pandemic under control?

It is obvious that the <a href="https://www.google.com/covid19/exposurenotifications/" target="_blank">Exposure Notification System</a> has been designed from the ground up with privacy in mind. I hope this brief explanation has put anyone on the fence at ease. This app is one of many things that will enable us to get back to our normal lives more quickly, it is therefore imperative that everyone with the means downloads this app. A test and trace system is only effective if as many people partake as possible. 

<br>
<div class="linkSection" style="text-align:center;">
<h5>Click the links below to download</h5>
<a href="https://apps.apple.com/gb/app/nhs-covid-19/id1520427663" class="appStoreLink" style="padding-right:50px;"><i class="fab fa-app-store fa-3x"></i></a>

<a href="https://play.google.com/store/apps/details?id=uk.nhs.covid19.production" class="googlePlayLink"><i class="fab fa-google-play fa-3x"></i></a>
</div>