/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?redirect=portal#installation/NodgNARATAdAzPCkCMBWALCAHABigTjgDZ0pisotkRUidUQR8okIBTAOyRzGGTB49+QgLqQ4IAMYATLIQgigA===
 */

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Plugin,
  AutoImage,
  AutoLink,
  Autosave,
  Bold,
  CKBox,
  CKBoxImageEdit,
  CloudServices,
  Essentials,
  Heading,
  ImageBlock,
  ImageCaption,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Italic,
  Link,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  SimpleUploadAdapter,
  Table,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  Underline,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Subscript,
  Superscript,
} from "ckeditor5";
import {
  Comments,
  ExportPdf,
  ExportWord,
  ImportWord,
  PasteFromOfficeEnhanced,
  RevisionHistory,
  TrackChanges,
  TrackChangesData,
  TrackChangesPreview,
} from "ckeditor5-premium-features";
import { WProofreader } from "@webspellchecker/wproofreader-ckeditor5";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

import "./App.css";

const LICENSE_KEY =
  "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDU2MjU1OTksImp0aSI6ImI0OWViMmQ4LWU0YzQtNGNjOS1hM2VhLTM3OWVjZWNiNzk2YiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjI1NmRiZTczIn0._4hKUmlZyk6hUBARrs02kQ6rjOd9652vq4xveWEHtfO7rMBsVaEPf6-e16KzDfwuAbg9RGz5VVUZq_a2tAM69g";

const CLOUD_SERVICES_TOKEN_URL =
  "https://2opr35e9brw_.cke-cs.com/token/dev/68b6353493c9c30c0f59db7777d3c28a1811c2d3154623cb0b73ccf2d8dc?limit=10";

const WPROOFREADER_SERVICE_ID = "Q4kOl8SAtHPKOHe";

// Revisions data will be available under a global variable `revisions`.
const revisions = [
  {
    id: "initial",
    name: "Initial revision",
    creatorId: "user-1",
    authorsIds: ["user-1"],
    diffData: {
      main: {
        insertions:
          '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ………… by and between The Lower Shelf, the “Publisher”, and …………, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him/herself and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]},{"name":"p","attributes":[],"children":["Publishing formats are enumerated in Appendix A."]}]',
        deletions:
          '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ………… by and between The Lower Shelf, the “Publisher”, and …………, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him/herself and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]},{"name":"p","attributes":[],"children":["Publishing formats are enumerated in Appendix A."]}]',
      },
    },
    createdAt: "2024-05-27T13:22:59.077Z",
    attributes: {},
    fromVersion: 1,
    toVersion: 1,
  },
  {
    id: "egh91t5jccbi894cacxx7dz7t36aj3k021",
    name: null,
    creatorId: null,
    authorsIds: [],
    diffData: {
      main: {
        insertions:
          '[{"type":"c","name":"p","attributes":[],"children":["Mask-wearing intention after the removal of the mandatory mask-wearing requirement in Hong Kong: application of the protection motivation theory and the theory of planned behaviour"]},{"type":"c","name":"p","attributes":[],"children":["Introduction"]},{"type":"c","name":"p","attributes":[],"children":["The coronavirus disease 2019 (COVID-19) pandemic has had extensive global social and health impacts. It triggered an international health and economic crisis that has profoundly altered people’s lives, perceptions, and behaviours. As of 13 March 2025, about 778 million confirmed cases of COVID-19 had caused around 7.1 million deaths worldwide.",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/earlyrelease/hkmj2311274.htm#r1"]],"children":[{"type":"a","name":"sup","attributes":[],"children":["1"]}]}," Various levels of non-pharmaceutical interventions, including frequent handwashing, mask-wearing, and social distancing, were implemented in most countries."]},{"type":"c","name":"p","attributes":[],"children":[]},{"type":"c","name":"p","attributes":[],"children":["Results"]},{"type":"c","name":"p","attributes":[],"children":["Participant characteristics"]},{"type":"c","name":"p","attributes":[],"children":["In total, 483 valid responses were included in the data analysis. ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-1.jpg"]],"children":["Table 1"]}," presents the participants’ demographic characteristics. The largest proportion of respondents belonged to the 18-25 age-group (28.2%), followed by the 56-65 (18.4%), the 66-75 (13.7%), and the 36-45 (13.0%) age-groups."]},{"type":"c","name":"figure","attributes":[["class","image"],["data-suggestion-end-after","insertion:eb9dc17cf61bc0f9c26c3c9cb2b91c399:user-1"],["data-suggestion-start-before","insertion:eb9dc17cf61bc0f9c26c3c9cb2b91c399:user-1"],["data-revision-end-after","insertion:user-1:0"],["data-revision-start-before","insertion:user-1:0"]],"children":[{"type":"e","name":"img","attributes":[["src","https://www.hkmj.org/system/files/hkmj2311274-table-3.jpg"]],"children":[]}]},{"type":"c","name":"p","attributes":[],"children":["Structural model"]},{"type":"c","name":"p","attributes":[],"children":[{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-4.jpg"]],"children":["Table 4"]}," displays the results of direct effects in the structural model. Of the 17 hypotheses, 10 were supported based on the results generated through a bootstrapping procedure with 5000 resamples. Four constructs—perceived severity, perceived self-efficacy, subjective norms, and attitude—had significant positive effects on the intention to continue wearing a mask. In contrast, perceived reward of maladaptive behaviours had a significant negative effect on mask-wearing intention.",{"type":"u","name":"revision-start","attributes":[["name","insertion:user-1:1"]],"children":[]},{"type":"u","name":"suggestion-start","attributes":[["name","insertion:e1e7f6670f5509471f55168bfc0fdcc55:user-1"]],"children":[]}]},{"type":"c","name":"figure","attributes":[["class","image"]],"children":[{"type":"e","name":"img","attributes":[["src","https://www.hkmj.org/system/files/hkmj2311274-fig.jpg"]],"children":[]}]},{"type":"c","name":"p","attributes":[],"children":["References"]},{"type":"c","name":"p","attributes":[],"children":["1. World Health Organization. WHO COVID-19 Dashboard. Available from: ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://covid19.who.int/"]],"children":["https://covid19.who.int/"]},". Accessed 13 Mar 2025."]},{"type":"c","name":"p","attributes":[],"children":["2. Lison A, Banholzer N, Sharma M, et al. Effectiveness assessment of non-pharmaceutical interventions: lessons learned from the COVID-19 pandemic. Lancet Public Health 2023;8:e311-7. ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://doi.org/10.1016/S2468-2667(23)00046-4"]],"children":["Crossref"]}]},{"type":"c","name":"p","attributes":[["data-revision-end-after","insertion:user-1:1"]],"children":["3. Duan Y, Shang B, Liang W, et al. Predicting hand washing, mask wearing and social distancing behaviors among older adults during the COVID-19 pandemic: an integrated social cognition model. BMC Geriatr 2022;22:91. ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://doi.org/10.1186/s12877-022-02785-2"]],"children":["Crossref"]},{"type":"u","name":"suggestion-end","attributes":[["name","insertion:e1e7f6670f5509471f55168bfc0fdcc55:user-1"]],"children":[]}]}]',
        deletions:
          '[{"type":"c","name":"p","attributes":[],"children":["Mask-wearing intention after the removal of the mandatory mask-wearing requirement in Hong Kong: application of the protection motivation theory and the theory of planned behaviour"]},{"type":"c","name":"p","attributes":[],"children":["Introduction"]},{"type":"c","name":"p","attributes":[],"children":["The coronavirus disease 2019 (COVID-19) pandemic has had extensive global social and health impacts. It triggered an international health and economic crisis that has profoundly altered people’s lives, perceptions, and behaviours. As of 13 March 2025, about 778 million confirmed cases of COVID-19 had caused around 7.1 million deaths worldwide.",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/earlyrelease/hkmj2311274.htm#r1"]],"children":[{"type":"a","name":"sup","attributes":[],"children":["1"]}]}," Various levels of non-pharmaceutical interventions, including frequent handwashing, mask-wearing, and social distancing, were implemented in most countries."]},{"type":"c","name":"p","attributes":[],"children":[]},{"type":"c","name":"p","attributes":[],"children":["Results"]},{"type":"c","name":"p","attributes":[],"children":["Participant characteristics"]},{"type":"c","name":"p","attributes":[],"children":["In total, 483 valid responses were included in the data analysis. ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-1.jpg"]],"children":["Table 1"]}," presents the participants’ demographic characteristics. The largest proportion of respondents belonged to the 18-25 age-group (28.2%), followed by the 56-65 (18.4%), the 66-75 (13.7%), and the 36-45 (13.0%) age-groups."]},{"type":"c","name":"p","attributes":[["data-revision-end-after","deletion:user-1:0"],["data-revision-start-before","deletion:user-1:0"]],"children":[]},{"type":"c","name":"p","attributes":[],"children":["Structural model"]},{"type":"c","name":"p","attributes":[],"children":[{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-4.jpg"]],"children":["Table 4"]}," displays the results of direct effects in the structural model. Of the 17 hypotheses, 10 were supported based on the results generated through a bootstrapping procedure with 5000 resamples. Four constructs—perceived severity, perceived self-efficacy, subjective norms, and attitude—had significant positive effects on the intention to continue wearing a mask. In contrast, perceived reward of maladaptive behaviours had a significant negative effect on mask-wearing intention.",{"type":"u","name":"revision-start","attributes":[["name","deletion:user-1:1"]],"children":[]}]},{"type":"c","name":"p","attributes":[["data-revision-end-after","deletion:user-1:1"]],"children":[]}]',
      },
    },
    createdAt: "2024-05-27T13:26:39.252Z",
    attributes: {},
    fromVersion: 24,
    toVersion: 24,
  },
  {
    id: "e3847036a61f175477621dc600f3e6248",
    name: "test",
    creatorId: "user-1",
    authorsIds: ["user-1"],
    diffData: {
      main: {
        insertions:
          '[{"type":"c","name":"p","attributes":[],"children":[{"type":"u","name":"revision-start","attributes":[["name","insertion:user-1:0"]],"children":[]},"Mask-wearing intention after the removal of the mandatory mask-wearing requirement in Hong Kong: application of the protection motivation theory and the theory of planned behaviour"]},{"type":"c","name":"p","attributes":[],"children":[{"type":"u","name":"revision-end","attributes":[["name","insertion:user-1:0"]],"children":[]},"Introduction"]},{"type":"c","name":"p","attributes":[],"children":["The coronavirus disease 2019 (COVID-19) pandemic has had extensive global social and health impacts. It triggered an international health and economic crisis that has profoundly altered people’s lives, perceptions, and behaviours. As of 13 March 2025, about 778 million confirmed cases of COVID-19 had caused around 7.1 million deaths worldwide.",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/earlyrelease/hkmj2311274.htm#r1"]],"children":[{"type":"a","name":"sup","attributes":[],"children":["1"]}]}," Various levels of non-pharmaceutical interventions, including frequent handwashing, mask-wearing, and social distancing, were implemented in most countries."]},{"type":"c","name":"p","attributes":[],"children":[]},{"type":"c","name":"p","attributes":[],"children":["Results"]},{"type":"c","name":"p","attributes":[],"children":["Participant characteristics"]},{"type":"c","name":"p","attributes":[],"children":["In total, 483 valid responses were included in the data analysis. ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-1.jpg"]],"children":["Table 1"]}," presents the participants’ demographic characteristics. The largest proportion of respondents belonged to the 18-25 age-group (28.2%), followed by the 56-65 (18.4%), the 66-75 (13.7%), and the 36-45 (13.0%) age-groups."]},{"type":"c","name":"p","attributes":[],"children":[]},{"type":"c","name":"p","attributes":[],"children":["Structural model"]},{"type":"c","name":"p","attributes":[],"children":[{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-4.jpg"]],"children":["Table 4"]}," displays the results of direct effects in the structural model. Of the 17 hypotheses, 10 were supported based on the results generated through a bootstrapping procedure with 5000 resamples. Four constructs—perceived severity, perceived self-efficacy, subjective norms, and attitude—had significant positive effects on the intention to continue wearing a mask. In contrast, perceived reward of maladaptive behaviours had a significant negative effect on mask-wearing intention."]},{"type":"c","name":"p","attributes":[],"children":[]}]',
        deletions:
          '[{"type":"c","name":"p","attributes":[],"children":["Introduction"]},{"type":"c","name":"p","attributes":[],"children":["The coronavirus disease 2019 (COVID-19) pandemic has had extensive global social and health impacts. It triggered an international health and economic crisis that has profoundly altered people’s lives, perceptions, and behaviours. As of 13 March 2025, about 778 million confirmed cases of COVID-19 had caused around 7.1 million deaths worldwide.",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/earlyrelease/hkmj2311274.htm#r1"]],"children":[{"type":"a","name":"sup","attributes":[],"children":["1"]}]}," Various levels of non-pharmaceutical interventions, including frequent handwashing, mask-wearing, and social distancing, were implemented in most countries."]},{"type":"c","name":"p","attributes":[],"children":[]},{"type":"c","name":"p","attributes":[],"children":["Results"]},{"type":"c","name":"p","attributes":[],"children":["Participant characteristics"]},{"type":"c","name":"p","attributes":[],"children":["In total, 483 valid responses were included in the data analysis. ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-1.jpg"]],"children":["Table 1"]}," presents the participants’ demographic characteristics. The largest proportion of respondents belonged to the 18-25 age-group (28.2%), followed by the 56-65 (18.4%), the 66-75 (13.7%), and the 36-45 (13.0%) age-groups."]},{"type":"c","name":"p","attributes":[],"children":[]},{"type":"c","name":"p","attributes":[],"children":["Structural model"]},{"type":"c","name":"p","attributes":[],"children":[{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-4.jpg"]],"children":["Table 4"]}," displays the results of direct effects in the structural model. Of the 17 hypotheses, 10 were supported based on the results generated through a bootstrapping procedure with 5000 resamples. Four constructs—perceived severity, perceived self-efficacy, subjective norms, and attitude—had significant positive effects on the intention to continue wearing a mask. In contrast, perceived reward of maladaptive behaviours had a significant negative effect on mask-wearing intention."]},{"type":"c","name":"p","attributes":[],"children":[]}]',
        attachChange: null,
        attributesBefore: {},
        attributesAfter: {},
      },
    },
    createdAt: "2025-04-07T04:28:50.337Z",
    attributes: {},
    fromVersion: 2,
    toVersion: 54,
  },
  {
    id: "e3788e738c383d94bd7fcc5cf9ab7d703",
    name: "test",
    creatorId: "user-1",
    authorsIds: ["user-1"],
    diffData: {
      main: {
        insertions:
          '[{"type":"c","name":"p","attributes":[],"children":["Mask-wearing intention after the removal of the mandatory mask-wearing requirement in Hong Kong: application of the protection motivation theory and the theory of planned behaviour"]},{"type":"c","name":"p","attributes":[],"children":["Introduction"]},{"type":"c","name":"p","attributes":[],"children":["The coronavirus disease 2019 (COVID-19) pandemic has had extensive global social and health impacts. It triggered an international health and economic crisis that has profoundly altered people’s lives, perceptions, and behaviours. As of 13 March 2025, about 778 million confirmed cases of COVID-19 had caused around 7.1 million deaths worldwide.",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/earlyrelease/hkmj2311274.htm#r1"]],"children":[{"type":"a","name":"sup","attributes":[],"children":["1"]}]}," Various levels of non-pharmaceutical interventions, including frequent handwashing, mask-wearing, and social distancing, were implemented in most countries."]},{"type":"c","name":"p","attributes":[],"children":[]},{"type":"c","name":"p","attributes":[],"children":["Results"]},{"type":"c","name":"p","attributes":[],"children":["Participant characteristics"]},{"type":"c","name":"p","attributes":[],"children":["In total, 483 valid responses were included in the data analysis. ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-1.jpg"]],"children":["Table 1"]}," presents the participants’ demographic characteristics. The largest proportion of respondents belonged to the 18-25 age-group (28.2%), followed by the 56-65 (18.4%), the 66-75 (13.7%), and the 36-45 (13.0%) age-groups."]},{"type":"c","name":"figure","attributes":[["class","image"],["data-suggestion-end-after","insertion:eb9dc17cf61bc0f9c26c3c9cb2b91c399:user-1"],["data-suggestion-start-before","insertion:eb9dc17cf61bc0f9c26c3c9cb2b91c399:user-1"],["data-revision-end-after","insertion:user-1:0"],["data-revision-start-before","insertion:user-1:0"]],"children":[{"type":"e","name":"img","attributes":[["src","https://www.hkmj.org/system/files/hkmj2311274-table-3.jpg"]],"children":[]}]},{"type":"c","name":"p","attributes":[],"children":["Structural model"]},{"type":"c","name":"p","attributes":[],"children":[{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-4.jpg"]],"children":["Table 4"]}," displays the results of direct effects in the structural model. Of the 17 hypotheses, 10 were supported based on the results generated through a bootstrapping procedure with 5000 resamples. Four constructs—perceived severity, perceived self-efficacy, subjective norms, and attitude—had significant positive effects on the intention to continue wearing a mask. In contrast, perceived reward of maladaptive behaviours had a significant negative effect on mask-wearing intention.",{"type":"u","name":"revision-start","attributes":[["name","insertion:user-1:1"]],"children":[]},{"type":"u","name":"suggestion-start","attributes":[["name","insertion:e1e7f6670f5509471f55168bfc0fdcc55:user-1"]],"children":[]}]},{"type":"c","name":"figure","attributes":[["class","image"]],"children":[{"type":"e","name":"img","attributes":[["src","https://www.hkmj.org/system/files/hkmj2311274-fig.jpg"]],"children":[]}]},{"type":"c","name":"p","attributes":[],"children":["References"]},{"type":"c","name":"p","attributes":[],"children":["1. World Health Organization. WHO COVID-19 Dashboard. Available from: ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://covid19.who.int/"]],"children":["https://covid19.who.int/"]},". Accessed 13 Mar 2025."]},{"type":"c","name":"p","attributes":[],"children":["2. Lison A, Banholzer N, Sharma M, et al. Effectiveness assessment of non-pharmaceutical interventions: lessons learned from the COVID-19 pandemic. Lancet Public Health 2023;8:e311-7. ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://doi.org/10.1016/S2468-2667(23)00046-4"]],"children":["Crossref"]}]},{"type":"c","name":"p","attributes":[["data-revision-end-after","insertion:user-1:1"]],"children":["3. Duan Y, Shang B, Liang W, et al. Predicting hand washing, mask wearing and social distancing behaviors among older adults during the COVID-19 pandemic: an integrated social cognition model. BMC Geriatr 2022;22:91. ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://doi.org/10.1186/s12877-022-02785-2"]],"children":["Crossref"]},{"type":"u","name":"suggestion-end","attributes":[["name","insertion:e1e7f6670f5509471f55168bfc0fdcc55:user-1"]],"children":[]}]}]',
        deletions:
          '[{"type":"c","name":"p","attributes":[],"children":["Mask-wearing intention after the removal of the mandatory mask-wearing requirement in Hong Kong: application of the protection motivation theory and the theory of planned behaviour"]},{"type":"c","name":"p","attributes":[],"children":["Introduction"]},{"type":"c","name":"p","attributes":[],"children":["The coronavirus disease 2019 (COVID-19) pandemic has had extensive global social and health impacts. It triggered an international health and economic crisis that has profoundly altered people’s lives, perceptions, and behaviours. As of 13 March 2025, about 778 million confirmed cases of COVID-19 had caused around 7.1 million deaths worldwide.",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/earlyrelease/hkmj2311274.htm#r1"]],"children":[{"type":"a","name":"sup","attributes":[],"children":["1"]}]}," Various levels of non-pharmaceutical interventions, including frequent handwashing, mask-wearing, and social distancing, were implemented in most countries."]},{"type":"c","name":"p","attributes":[],"children":[]},{"type":"c","name":"p","attributes":[],"children":["Results"]},{"type":"c","name":"p","attributes":[],"children":["Participant characteristics"]},{"type":"c","name":"p","attributes":[],"children":["In total, 483 valid responses were included in the data analysis. ",{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-1.jpg"]],"children":["Table 1"]}," presents the participants’ demographic characteristics. The largest proportion of respondents belonged to the 18-25 age-group (28.2%), followed by the 56-65 (18.4%), the 66-75 (13.7%), and the 36-45 (13.0%) age-groups."]},{"type":"c","name":"p","attributes":[["data-revision-end-after","deletion:user-1:0"],["data-revision-start-before","deletion:user-1:0"]],"children":[]},{"type":"c","name":"p","attributes":[],"children":["Structural model"]},{"type":"c","name":"p","attributes":[],"children":[{"type":"a","name":"a","attributes":[["target","_blank"],["rel","noopener noreferrer"],["href","https://www.hkmj.org/system/files/hkmj2311274-table-4.jpg"]],"children":["Table 4"]}," displays the results of direct effects in the structural model. Of the 17 hypotheses, 10 were supported based on the results generated through a bootstrapping procedure with 5000 resamples. Four constructs—perceived severity, perceived self-efficacy, subjective norms, and attitude—had significant positive effects on the intention to continue wearing a mask. In contrast, perceived reward of maladaptive behaviours had a significant negative effect on mask-wearing intention.",{"type":"u","name":"revision-start","attributes":[["name","deletion:user-1:1"]],"children":[]}]},{"type":"c","name":"p","attributes":[["data-revision-end-after","deletion:user-1:1"]],"children":[]}]',
        attachChange: null,
        attributesBefore: {},
        attributesAfter: {},
      },
    },
    createdAt: "2025-04-07T07:10:24.965Z",
    attributes: {},
    fromVersion: 1,
    toVersion: 21,
  },
];

/**
 * The `UsersIntegration` lets you manage user data and permissions.
 *
 * This is an essential feature when many users work on the same document.
 *
 * To read more about it, visit the CKEditor 5 documentation: https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/users.html.
 */
class UsersIntegration extends Plugin {
  static get requires() {
    return ["Users"];
  }

  static get pluginName() {
    return "UsersIntegration";
  }

  init() {
    const usersPlugin = this.editor.plugins.get("Users");

    // These are sample users for demonstration purposes.
    // In your integration make sure to provide user data from your data source.
    const users = [
      { id: "user-1", name: "Zee Croce" },
      { id: "user-2", name: "Mex Haddox" },
    ];
    const me = users[0];

    for (const user of users) {
      usersPlugin.addUser(user);
    }

    usersPlugin.defineMe(me.id);
  }
}

/**
 * The `CommentsIntegration` lets you synchronize comments in the document with your data source (e.g. a database).
 *
 * To read more about it, visit the CKEditor 5 documentation: https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments-integration.html.
 */
class CommentsIntegration extends Plugin {}

/**
 * The `TrackChangesIntegration` lets you synchronize suggestions added to the document with your data source (e.g. a database).
 *
 * To read more about it, visit the CKEditor 5 documentation: https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/track-changes/track-changes-integration.html.
 */
class TrackChangesIntegration extends Plugin {}

/**
 * The `RevisionHistoryIntegration` lets you synchronize named revisions in the document with your data source (e.g. a database).
 *
 * To read more about it, visit the CKEditor 5 documentation: https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/revision-history/revision-history-integration.html.
 */
class RevisionHistoryIntegration extends Plugin {
  static get pluginName() {
    return "RevisionHistoryIntegration";
  }

  static get requires() {
    return ["RevisionHistory"];
  }

  init() {
    const revisionHistory = this.editor.plugins.get("RevisionHistory");
    const localStorageRevisionData = localStorage.getItem("revisionsData");
    let revisionsToUse;

    // Check if localStorage contains valid JSON data
    if (localStorageRevisionData) {
      revisionsToUse = JSON.parse(localStorageRevisionData);
      console.log("using localstorage");
    } else {
      revisionsToUse = revisions; //
      console.log("using hardcode");
    }

    // Add revisions to the editor
    for (const revisionData of revisionsToUse) {
      revisionHistory.addRevisionData(revisionData);
    }
  }
}

export default function App() {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const editorAnnotationsRef = useRef(null);
  const editorRevisionHistoryRef = useRef(null);
  const editorRevisionHistoryEditorRef = useRef(null);
  const editorRevisionHistorySidebarRef = useRef(null);
  const editorInstanceRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  const showEditorDataInConsole = useCallback(
    (evt) => {
      if (!editorInstanceRef?.current) {
        return;
      }

      const editorInstance = editorInstanceRef.current;
      const editorData = editorInstance.data.get();
      const revisionInstance = editorInstance.plugins.get(
        "RevisionsRepository"
      );
      const revisionsData = revisionInstance.getRevisions({ toJSON: true });
      const editorDataFinal = editorInstance.getData({ trim: "empty" });
      const suggestionsData = editorInstance.plugins
        .get("TrackChanges")
        .getSuggestions();
      const commentThreadsData = editorInstance.plugins
        .get("CommentsRepository")
        .getCommentThreads({
          skipNotAttached: true,
          skipEmpty: true,
        });

      console.log("Editor data:");
      console.log(editorData);
      console.log("Editor data after accepted:");
      console.log(editorDataFinal);
      console.log("Suggestions data:");
      console.log(suggestionsData);
      console.log("Comment threads data:");
      console.log(commentThreadsData);
      console.log("Revisions data:");
      console.log(revisionsData);
    },
    [isLayoutReady]
  );

  const saveEditorData = useCallback(async () => {
    if (!editorInstanceRef?.current) {
      return;
    }

    const editorInstance = editorInstanceRef.current;
    const revisionTracker = editorInstance.plugins.get("RevisionTracker");

    // Create a new revision with the current editor data

    try {
      await revisionTracker.saveRevision({ name: "test" });

      const revisionInstance = editorInstance.plugins.get(
        "RevisionsRepository"
      );
      const revisionsData = revisionInstance.getRevisions({ toJSON: true });
      console.log(revisionsData);
      localStorage.setItem("revisionsData", JSON.stringify(revisionsData));

      console.log("New revision saved successfully.");
    } catch (error) {
      console.error("Error saving new revision:", error);
    }

    // save to local storage
  }, [isLayoutReady]);

  const showRevisionHist = useCallback(() => {
    if (!editorInstanceRef?.current) {
      return;
    }

    const editorInstance = editorInstanceRef.current;

    // Retrieve the showRevisionViewerCallback function from the editor's configuration
    const showRevisionViewer =
      editorInstance.config.get("revisionHistory").showRevisionViewerCallback;

    // Invoke the function to open the Revision History viewer
    if (typeof showRevisionViewer === "function") {
      showRevisionViewer();
    } else {
      console.error("showRevisionViewerCallback is not defined.");
    }
  }, [isLayoutReady]);

  const exportPDFProgrammatically = useCallback(() => {
    if (!editorInstanceRef?.current) {
      return;
    }

    const editorInstance = editorInstanceRef.current;

    const exportPdfConfig = editorInstance.config.get("exportPdf");

    if (exportPdfConfig) {
      editorInstance.execute("exportPdf", exportPdfConfig);
    } else {
      console.error("Export to PDF configuration is not available.");
    }
  }, [isLayoutReady]);

  const declineAllSuggestions = useCallback(() => {
    if (!editorInstanceRef?.current) {
      return;
    }

    const editorInstance = editorInstanceRef.current;

    const trackChangesPlugin = editorInstance.plugins.get("TrackChanges");

    if (trackChangesPlugin) {
      // Retrieve all suggestions from the Track Changes plugin
      const suggestions = trackChangesPlugin.getSuggestions();

      // Iterate over each suggestion and discard it
      for (const suggestion of suggestions) {
        suggestion.discard();
      }
    } else {
      console.error("The Track Changes plugin is not available.");
    }
  }, [isLayoutReady]);

  function SpecialCharactersGreek(editor) {
    editor.plugins.get("SpecialCharacters").addItems(
      "Greek",
      [
        { title: "alpha", character: "α" },
        { title: "beta", character: "β" },
        { title: "gamma", character: "γ" },
        { title: "delta", character: "δ" },
        { title: "epsilon", character: "ε" },
        { title: "zeta", character: "ζ" },
        { title: "eta", character: "η" },
        { title: "theta", character: "θ" },
        { title: "iota", character: "ι" },
        { title: "kappa", character: "κ" },
        { title: "lambda", character: "λ" },
        { title: "mu", character: "μ" },
        { title: "nu", character: "ν" },
        { title: "xi", character: "ξ" },
        { title: "omicron", character: "ο" },
        { title: "pi", character: "π" },
        { title: "rho", character: "ρ" },
        { title: "sigma", character: "σ" },
        { title: "tau", character: "τ" },
        { title: "upsilon", character: "υ" },
        { title: "phi", character: "φ" },
        { title: "chi", character: "χ" },
        { title: "psi", character: "ψ" },
        { title: "omega", character: "ω" },
        { title: "Alpha", character: "Α" },
        { title: "Beta", character: "Β" },
        { title: "Gamma", character: "Γ" },
        { title: "Delta", character: "Δ" },
        { title: "Epsilon", character: "Ε" },
        { title: "Zeta", character: "Ζ" },
        { title: "Eta", character: "Η" },
        { title: "Theta", character: "Θ" },
        { title: "Iota", character: "Ι" },
        { title: "Kappa", character: "Κ" },
        { title: "Lambda", character: "Λ" },
        { title: "Mu", character: "Μ" },
        { title: "Nu", character: "Ν" },
        { title: "Xi", character: "Ξ" },
        { title: "Omicron", character: "Ο" },
        { title: "Pi", character: "Π" },
        { title: "Rho", character: "Ρ" },
        { title: "Sigma", character: "Σ" },
        { title: "Tau", character: "Τ" },
        { title: "Upsilon", character: "Υ" },
        { title: "Phi", character: "Φ" },
        { title: "Chi", character: "Χ" },
        { title: "Psi", character: "Ψ" },
        { title: "Omega", character: "Ω" },
      ],
      { label: "Greek" }
    );
  }

  useEffect(() => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useMemo(() => {
    if (!isLayoutReady) {
      return {};
    }

    return {
      editorConfig: {
        toolbar: {
          items: [
            "trackChanges",
            "comment",
            "commentsArchive",
            "|",
            "Heading",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "subscript",
            "superscript",
            "|",
            "specialCharacters",
            "link",
            "ckbox",
            "insertTable",
            "|",
            "ImportWord",
            "exportWord",
            "exportPdf",
            "|",
            "wproofreader",
          ],
          shouldNotGroupWhenFull: false,
        },
        plugins: [
          AutoImage,
          AutoLink,
          Autosave,
          Bold,
          CKBox,
          CKBoxImageEdit,
          CloudServices,
          Comments,
          Essentials,
          ExportPdf,
          ExportWord,
          Heading,
          ImageBlock,
          ImageCaption,
          ImageInsertViaUrl,
          ImageResize,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          ImportWord,
          Italic,
          Link,
          Paragraph,
          PasteFromOffice,
          PasteFromOfficeEnhanced,
          PictureEditing,
          RevisionHistory,
          SimpleUploadAdapter,
          Table,
          TableCellProperties,
          TableColumnResize,
          TableProperties,
          TableToolbar,
          TrackChanges,
          TrackChangesData,
          TrackChangesPreview,
          Underline,
          SpecialCharacters,
          SpecialCharactersArrows,
          SpecialCharactersCurrency,
          SpecialCharactersEssentials,
          SpecialCharactersLatin,
          SpecialCharactersMathematical,
          SpecialCharactersText,
          Subscript,
          Superscript,
          SpecialCharactersGreek,
          WProofreader,
        ],
        extraPlugins: [
          UsersIntegration,
          CommentsIntegration,
          TrackChangesIntegration,
          RevisionHistoryIntegration,
        ],
        comments: {
          editorConfig: {
            extraPlugins: [Bold, Italic],
          },
        },
        exportPdf: {
          stylesheets: [
            /* This path should point to the content stylesheets on your assets server. */
            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-pdf.html */
            "./export-style.css",
            /* Export PDF needs access to stylesheets that style the content. */
            "https://cdn.ckeditor.com/ckeditor5/44.3.0/ckeditor5.css",
            "https://cdn.ckeditor.com/ckeditor5-premium-features/44.3.0/ckeditor5-premium-features.css",
          ],
          fileName: "export-pdf-demo.pdf",
          converterOptions: {
            format: "Tabloid",
            margin_top: "20mm",
            margin_bottom: "20mm",
            margin_right: "24mm",
            margin_left: "24mm",
            page_orientation: "portrait",
          },
        },
        exportWord: {
          stylesheets: [
            /* This path should point to the content stylesheets on your assets server. */
            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-word.html */
            "./export-style.css",
            /* Export Word needs access to stylesheets that style the content. */
            "https://cdn.ckeditor.com/ckeditor5/44.3.0/ckeditor5.css",
            "https://cdn.ckeditor.com/ckeditor5-premium-features/44.3.0/ckeditor5-premium-features.css",
          ],
          fileName: "export-word-demo.docx",
          converterOptions: {
            document: {
              orientation: "portrait",
              size: "Tabloid",
              margins: {
                top: "20mm",
                bottom: "20mm",
                right: "24mm",
                left: "24mm",
              },
            },
          },
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },
        image: {
          toolbar: [
            "toggleImageCaption",
            "imageTextAlternative",
            "|",
            "imageStyle:alignBlockLeft",
            "imageStyle:block",
            "imageStyle:alignBlockRight",
            "|",
            "resizeImage",
            "|",
            "ckboxImageEdit",
          ],
          styles: {
            options: ["alignBlockLeft", "block", "alignBlockRight"],
          },
        },
        // initialData:
        // 	'<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n',
        licenseKey: LICENSE_KEY,
        // cloudServices: {
        // 	tokenUrl: CLOUD_SERVICES_TOKEN_URL
        // },
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          decorators: {
            toggleDownloadable: {
              mode: "manual",
              label: "Downloadable",
              attributes: {
                download: "file",
              },
            },
          },
        },
        placeholder: "Type or paste your content here!",
        revisionHistory: {
          editorContainer: editorContainerRef.current,
          viewerContainer: editorRevisionHistoryRef.current,
          viewerEditorElement: editorRevisionHistoryEditorRef.current,
          viewerSidebarContainer: editorRevisionHistorySidebarRef.current,
          resumeUnsavedRevision: true,
        },
        sidebar: {
          container: editorAnnotationsRef.current,
        },
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
          ],
        },
        simpleUpload: {
          // The URL that the images are uploaded to.
          uploadUrl: "http://localhost:3000/upload",

          // Headers sent along with the XMLHttpRequest to the upload server.
          headers: {
            // Include any necessary headers here
          },
        },
        wproofreader: {
          serviceId: WPROOFREADER_SERVICE_ID,
          srcUrl:
            "https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js",
          lang: "en_GB",
          autoStartup: true,
        },
      },
    };
  }, [isLayoutReady]);

  return (
    <div className="main-container">
      <div
        className="editor-container editor-container_classic-editor editor-container_include-annotations"
        ref={editorContainerRef}
      >
        <div className="editor-container__editor-wrapper">
          <div className="editor-container__editor">
            <div ref={editorRef}>
              {editorConfig && (
                <CKEditor
                  editor={ClassicEditor}
                  config={editorConfig}
                  onReady={(editor) => {
                    editorInstanceRef.current = editor;
                    const trackChangesPlugin =
                      editor.plugins.get("TrackChanges");
                    if (trackChangesPlugin) {
                      editor.execute("trackChanges");
                    }
                  }}
                />
              )}
            </div>
          </div>
          <div className="editor-container__sidebar">
            <div ref={editorAnnotationsRef}></div>
          </div>
        </div>
      </div>
      <div className="revision-history" ref={editorRevisionHistoryRef}>
        <div className="revision-history__wrapper">
          <div
            className="revision-history__editor"
            ref={editorRevisionHistoryEditorRef}
          ></div>
          <div
            className="revision-history__sidebar"
            ref={editorRevisionHistorySidebarRef}
          ></div>
        </div>
      </div>
      <div>
        <button className="ck ck-button" onClick={showEditorDataInConsole}>
          Get editor data
        </button>
        <button className="ck ck-button" onClick={saveEditorData}>
          Save editor data
        </button>
        <button className="ck ck-button" onClick={showRevisionHist}>
          Show revision hist
        </button>
        <button className="ck ck-button" onClick={exportPDFProgrammatically}>
          Export PDF
        </button>
        <button className="ck ck-button" onClick={declineAllSuggestions}>
          Decline suggestions
        </button>
      </div>
    </div>
  );
}
