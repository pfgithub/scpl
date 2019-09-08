export type ScPLNameContentItemClass = keyof typeof extensionInputNameToContentItemClass;
export type ExtensionInputContentItemClass = (typeof extensionInputNameToContentItemClass)[ScPLNameContentItemClass];

export const extensionInputNameToContentItemClass = {
	appstoreapp: "WFAppStoreAppContentItem",
	article: "WFArticleContentItem",
	contact: "WFContactContentItem",
	date: "WFDateContentItem",
	emailaddress: "WFEmailAddressContentItem",
	file: "WFGenericFileContentItem",
	image: "WFImageContentItem",
	itunesproduct: "WFiTunesProductContentItem",
	location: "WFLocationContentItem",
	dcmapslilnk: "WFDCMapsLinkContentItem",
	avasset: "WFAVAssetContentItem",
	pdf: "WFPDFContentItem",
	phonenumber: "WFPhoneNumberContentItem",
	richtext: "WFRichTextContentItem",
	safariwebpage: "WFSafariWebPageContentItem",
	string: "WFStringContentItem",
	url: "WFURLContentItem"
};

const inverse: {
	[key in ExtensionInputContentItemClass]: ScPLNameContentItemClass;
} = {};
Object.keys(extensionInputNameToContentItemClass).forEach(key => {
	inverse[
		extensionInputNameToContentItemClass[key as ScPLNameContentItemClass]
	] = key as ScPLNameContentItemClass;
});

export const contentItemClassToExtensionInputName = inverse;
