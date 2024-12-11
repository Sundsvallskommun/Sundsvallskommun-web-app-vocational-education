import _sv from '@kolben/ra-language-swedish';
import { TranslationMessagesExtended } from './type';

const sv: TranslationMessagesExtended = {
  ..._sv,
  ra: {
    ..._sv.ra,
    saved_queries: {
      label: 'string',
      query_name: 'string',
      new_label: 'string',
      new_dialog_title: 'string',
      remove_label: 'string',
      remove_label_with_name: 'string',
      remove_dialog_title: 'string',
      remove_message: 'string',
      help: 'string',
    },
    action: {
      ..._sv.ra.action,
      clear_array_input: 'string',
      remove_all_filters: 'string',
      open: 'string',
      toggle_theme: 'string',
      select_columns: 'string',
      update_application: 'string',
    },
    notification: {
      ..._sv.ra.notification,
      application_update_available: 'string',
    },
    message: {
      ..._sv.ra.message,
      auth_error: 'string',
      clear_array_input: 'string',
    },
    navigation: {
      ..._sv.ra.navigation,
      partial_page_range_info: 'string',
      current_page: 'string',
      page: 'string',
      first: 'string',
      last: 'string',
      previous: 'string',
    },
    configurable: {
      customize: 'string',
      configureMode: 'string',
      inspector: {
        title: 'string',
        content: 'string',
        reset: 'string',
        hideAll: 'string',
        showAll: 'string',
      },
      Datagrid: {
        title: 'string',
        unlabeled: 'string',
      },
      SimpleForm: {
        title: 'string',
        unlabeled: 'string',
      },
      SimpleList: {
        title: 'string',
        primaryText: 'string',
        secondaryText: 'string',
        tertiaryText: 'string',
      },
    },
    tiptap: {
      select_level: 'Välj nivå',
      list_bulleted: 'Punktlista',
      list_numbered: 'Numrerad lista',
    },
  },
  validation: {
    required: 'Fältet måste ifyllas',
    password: {
      minLength: `Lösenordet måste vara minst antal karaktärer: %{minLength}`,
      maxLength: `Lösenordet måste vara max antal karaktärer: %{maxLength}`,
      minLettersLower: `Lösenordet måste innehålla minst antal små bokstäver: %{minLettersLower}`,
      minLettersUpper: `Lösenordet måste innehålla minst antal stora bokstäver: %{minLettersUpper}`,
      minNumbers: `Lösenordet måste innehålla minst antal siffror: %{minNumbers}`,
      minSpecialCharacters: `Lösenordet måste innehålla minst antal specialtecken: %{minSpecialCharacters}`,
    },
  },
  gallery: {
    title: 'Bildgalleri',
    description: 'Välj en bild bland de som finns uppladdade eller ladda upp en ny bild.',
    uploadNew: 'Ladda upp ny bild',
    addImage: 'Lägg till bild',
    editImage: 'Ändra bild',
    removeImage: 'Ta bort bild',
    imageUploading: 'Laddar upp bild...',
    useImage: 'Använd bild',
  },
  resources: {
    components: {
      chosenImageLabel: 'Vald bild',
      ImageCustomField: {
        label: 'Bild',
      },
    },
    page: {
      name: 'Sida |||| Sidor',
      fields: {
        pageName: 'Sidreferensnamn',
        title: 'Rubrik',
        description: 'Ingress',
        showImgInDesktop: 'Visa bild i desktop',
        showImgInMobile: 'Visa bild i mobil',
      },
    },
    promotionsBlock: {
      name: 'Huvud-puff |||| Huvud-puffar',
      fields: {
        promotionsBlock: 'Huvud-puff',
        pageName: 'Sidreferensnamn',
        promotedPageName: 'Sidreferensnamn',
        showBlock: 'Visa Huvud-puffar',
      },
    },
    promotionsBlockPromotions: {
      name: 'Huvud-puff |||| Huvud-puffar',
      fields: {
        pageName: 'Sidreferensnamn',
        promotedPageName: 'Puffad sida',
      },
    },
    mapBlock: {
      name: 'Kartblock |||| Kartblock',
      fields: {
        pageName: 'Sidreferensnamn',
        mapBlock: 'Kartblock',
        title: 'Rubrik',
        text: 'Text',
        buttonText: 'Knapp-text',
        showBlock: 'Visa Kartblock',
      },
    },
    searchBlock: {
      name: 'Sökblock',
      fields: {
        showBlock: 'Visa Sökblock',
      },
    },
    educationsRelatedBlock: {
      name: 'Relaterad utbildningar-block',
      fields: {
        showBlock: 'Visa relaterade utbildningar-block',
      },
    },
    educationsStartingBlock: {
      name: 'Utbildningar som snart börjar-block',
      fields: {
        showBlock: 'Visa Utbildningar som snart börjar-block',
      },
    },
    employerPromotionsBlock: {
      name: 'Arbetsgivarvalda utbildningar-block',
      editButton: 'Redigera arbetsgivarvalda utbildningar-block',
      fields: {
        pageName: 'Sidreferensnamn',
        title: 'Rubrik',
        description: 'Beskrivning',
        showBlock: 'Visa Arbetsgivarvalda utbildningar-block',
      },
    },
    employerPromotionsBlockPromotions: {
      name: 'Arbetsgivarvald utbildning',
      fields: {
        pageName: 'Sidreferensnamn',
        title: 'Rubrik',
        text: 'Ingress',
        searchPhrase: 'Sökfras',
        employerPromotionsBlock: 'Arbetsgivarvalda utbildningar-block',
      },
    },
    importantDatesBlock: {
      name: 'Viktiga datum-block |||| Viktiga datum-block',
      fields: {
        pageName: 'Sidreferensnamn',
        importantDatesBlock: 'Viktiga datum-block',
        title: 'Rubrik',
        showBlock: 'Visa Viktiga datum-block',
        showSeeAllButton: 'Visa "Visa alla viktiga datum"-knapp',
        amountShown: 'Antal viktiga datum som ska visas',
        referencedImportantDatesBlockPageName: 'Visa viktiga datum från annat datum-block',
        referencedImportantDatesBlockPageNameEmptyText: 'Använd detta blocks frågor',
        showAll: 'Visa alla viktiga datum',
      },
    },
    importantDatesBlockDateCards: {
      name: 'Viktigt datum |||| Viktiga datum',
      fields: {
        title: 'Rubrik',
        date: 'Datum',
        text: 'Text',
        url: 'Url',
        importantDatesBlock: 'Viktiga datum-block',
      },
    },
    faqBlock: {
      name: 'FAQ-block |||| FAQ-block',
      fields: {
        pageName: 'Sidreferensnamn',
        title: 'Rubrik',
        description: 'Beskrivning',
        showBlock: 'Visa FAQ-block',
      },
    },
    faqBlockQuestions: {
      name: 'FAQ-fråga',
      fields: {
        question: 'Fråga',
        answer: 'Svar',
        faqBlock: 'FAQ-block',
      },
    },
    contactFormBlock: {
      name: 'Kontaktformulär-block',
      fields: {
        pageName: 'Sidreferensnamn',
        title: 'Rubrik',
        description: 'Beskrivning',
        showBlock: 'Visa Kontaktformulär-block',
      },
    },
    contactFormBlockEmails: {
      name: 'Kontaktformulär-email',
      fields: {
        label: 'Kommun',
        email: 'Email',
        contactFormBlock: 'Kontaktformulär-block',
      },
    },
    logosBlock: {
      name: 'Logos-block |||| Logos-block',
      fields: {
        pageName: 'Sidreferensnamn',
        title: 'Rubrik',
        description: 'Beskrivning',
        showBlock: 'Visa Logos-block',
      },
    },
    logosBlockLogos: {
      name: 'Logo',
      fields: {
        pageName: 'Sidreferensnamn',
        alt: 'Alt-text',
        src: 'Bild',
        logosBlock: 'Logos-block',
        image: 'Välj bild',
      },
    },
    tableBlock: {
      name: 'Tabell',
      fields: {
        title: 'Titel',
        summary: 'Tabellsummering',
        save: 'Spara',
        remove: 'Ta bort',
        header_label: 'Kolumnnamn',
        cell_label: 'Innehåll',
        add_row: 'Lägg till',
      },
      headersHeading: 'Kolumner',
      rowsHeading: 'Rader',
      new_header: 'Ny kolumn',
      missing_rows: 'Inga rader hittades',
    },
    tableBlockHeader: {
      name: 'Kolumner',
    },
    tableBlockRow: {
      name: 'Rader',
    },
    footer: {
      name: 'Sidfot',
      contactUsName: 'Kontakta-oss-sektionen',
      fields: {
        contactTitle: 'Rubrik',
        contactText: 'Innehåll',
      },
    },
    user: {
      name: 'Användare |||| Användare',
      fields: {
        username: 'Användarnamn',
        password: 'Lösenord',
      },
      generatePassword: 'Generera nytt lösenord',
    },
    wysiwyg: {
      customimage: {
        toolbarText: 'Bild',
      },
      youtube: {
        toolbarText: 'Lägg till Youtube-video',
      },
      factblock: {
        toolbarText: 'Faktablock',
      },
      sitenavigationbutton: {
        toolbarText: 'Sidnavigationsknapp',
        form: {
          buttonText: 'Knapptext',
          href: 'Sida att gå till',
        },
      },
    },
  },
};
export default sv;
