import type { Schema, Attribute } from '@strapi/strapi';

export interface UiTitle extends Schema.Component {
  collectionName: 'components_ui_titles';
  info: {
    displayName: 'Title';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    link: Attribute.Component<'ui.link'>;
    label: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::bold-title-editor.title',
        {
          output: 'html';
        }
      >;
  };
}

export interface UiTextWithLink extends Schema.Component {
  collectionName: 'components_ui_text_with_links';
  info: {
    displayName: 'TextWithLink';
    icon: 'link';
  };
  attributes: {
    label: Attribute.Text & Attribute.Required;
    link: Attribute.Component<'ui.custom-link'>;
  };
}

export interface UiTeamPerson extends Schema.Component {
  collectionName: 'components_ui_team_people';
  info: {
    displayName: 'TeamPerson';
    icon: 'emotionHappy';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    job: Attribute.String & Attribute.Required;
    info: Attribute.Component<'ui.label-with-value', true> & Attribute.Required;
    contacts: Attribute.Component<'ui.contact-link', true> & Attribute.Required;
    contact: Attribute.String & Attribute.Required;
  };
}

export interface UiStep extends Schema.Component {
  collectionName: 'components_ui_steps';
  info: {
    displayName: 'Step';
    icon: 'puzzle';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.RichText & Attribute.Required;
    color: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    helpText: Attribute.RichText;
  };
}

export interface UiReviewPerson extends Schema.Component {
  collectionName: 'components_ui_review_people';
  info: {
    displayName: 'ReviewPerson';
    icon: 'emotionHappy';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    job: Attribute.String & Attribute.Required;
    avatar: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface UiReviewCard extends Schema.Component {
  collectionName: 'components_ui_review_cards';
  info: {
    displayName: 'ReviewCard';
    icon: 'calendar';
  };
  attributes: {
    projectName: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
    author: Attribute.Component<'ui.review-person'>;
  };
}

export interface UiPrice extends Schema.Component {
  collectionName: 'components_ui_prices';
  info: {
    displayName: 'Price';
    icon: 'write';
    description: '';
  };
  attributes: {
    amount: Attribute.Integer;
    currency: Attribute.String & Attribute.Required;
    state: Attribute.Enumeration<
      [
        '\u0424\u0438\u043A\u0441',
        '\u041E\u0442',
        '\u041F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u0438'
      ]
    > &
      Attribute.Required;
  };
}

export interface UiNewsMessage extends Schema.Component {
  collectionName: 'components_ui_news_messages';
  info: {
    displayName: 'NewsMessage';
    icon: 'medium';
    description: '';
  };
  attributes: {
    label: Attribute.Text & Attribute.Required;
    link: Attribute.Component<'ui.custom-link'>;
    color: Attribute.Enumeration<['green', 'yellow', 'red', 'gray']> &
      Attribute.Required &
      Attribute.DefaultTo<'gray'>;
  };
}

export interface UiLogo extends Schema.Component {
  collectionName: 'components_ui_logos';
  info: {
    displayName: 'Logo';
    icon: 'medium';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    color: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    description: Attribute.String;
  };
}

export interface UiLink extends Schema.Component {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'Link';
    icon: 'cursor';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']>;
  };
}

export interface UiLabelWithValue extends Schema.Component {
  collectionName: 'components_ui_label_with_values';
  info: {
    displayName: 'LabelWithValue';
    icon: 'file';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface UiInputProps extends Schema.Component {
  collectionName: 'components_ui_input_props';
  info: {
    displayName: 'InputProps';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    required: Attribute.Boolean;
    type: Attribute.Enumeration<
      [
        'text',
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'time',
        'url',
        'week'
      ]
    > &
      Attribute.DefaultTo<'text'>;
    placeholder: Attribute.String;
    name: Attribute.String & Attribute.Required;
    autoComplete: Attribute.String;
  };
}

export interface UiCustomLink extends Schema.Component {
  collectionName: 'components_ui_custom_links';
  info: {
    displayName: 'CustomLink';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    children: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']>;
    color: Attribute.Enumeration<['primary', 'secondary', 'transparent']>;
    size: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
    icon: Attribute.Enumeration<
      [
        'VK',
        'Behance',
        'Instagram',
        'WhatsApp',
        'Telegram',
        'GitHub',
        'OK',
        'Habr',
        'Website',
        'Arrow',
        'Send',
        'Pen',
        'Robot',
        'CheckMark',
        'Info',
        'Yandex',
        'Google',
        'Chrome',
        'Eye',
        'Fire',
        'Briefcase',
        'Clock',
        'Update'
      ]
    >;
  };
}

export interface UiCustomInput extends Schema.Component {
  collectionName: 'components_ui_custom_inputs';
  info: {
    displayName: 'CustomInput';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    inputProps: Attribute.Component<'ui.input-props'> & Attribute.Required;
    mask: Attribute.String;
  };
}

export interface UiCustomButton extends Schema.Component {
  collectionName: 'components_ui_custom_buttons';
  info: {
    displayName: 'CustomButton';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    children: Attribute.String & Attribute.Required;
    disabled: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['button', 'submit', 'reset']> &
      Attribute.DefaultTo<'button'>;
    color: Attribute.Enumeration<['primary', 'secondary', 'transparent']> &
      Attribute.DefaultTo<'primary'>;
    size: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
    icon: Attribute.Enumeration<
      [
        'VK',
        'Behance',
        'Instagram',
        'WhatsApp',
        'Telegram',
        'GitHub',
        'OK',
        'Habr',
        'Website',
        'Arrow',
        'Send',
        'Pen',
        'Robot',
        'CheckMark',
        'Info',
        'Yandex',
        'Google',
        'Chrome',
        'Eye',
        'Fire',
        'Briefcase',
        'Clock',
        'Update'
      ]
    >;
  };
}

export interface UiContactLink extends Schema.Component {
  collectionName: 'components_ui_contact_links';
  info: {
    displayName: 'ContactLink';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    socialNetwork: Attribute.Enumeration<
      [
        'Instagram',
        'Telegram',
        'VK',
        'WhatsApp',
        'Behance',
        'OK',
        'GitHub',
        'Habr',
        'Website',
        'Yandex',
        'Dzen',
        'Google',
        'Chrome'
      ]
    > &
      Attribute.Required;
  };
}

export interface UiAdvantage extends Schema.Component {
  collectionName: 'components_ui_advantages';
  info: {
    displayName: 'Advantage';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    isSelected: Attribute.Boolean & Attribute.DefaultTo<false>;
    isBig: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface UiAccordion extends Schema.Component {
  collectionName: 'components_ui_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    ask: Attribute.String & Attribute.Required;
    answer: Attribute.RichText & Attribute.Required;
  };
}

export interface MetaYandexMetrikaInitParameters extends Schema.Component {
  collectionName: 'components_meta_yandex_metrika_init_parameters';
  info: {
    displayName: 'YandexMetrikaInitParameters';
    icon: 'cog';
  };
  attributes: {
    accurateTrackBounce: Attribute.Boolean & Attribute.DefaultTo<true>;
    clickmap: Attribute.Boolean & Attribute.DefaultTo<true>;
    trackLinks: Attribute.Boolean & Attribute.DefaultTo<true>;
    webvisor: Attribute.Boolean & Attribute.DefaultTo<true>;
    childIframe: Attribute.Boolean;
    defer: Attribute.Boolean;
    trackHash: Attribute.Boolean;
    triggerEvent: Attribute.Boolean;
  };
}

export interface MetaUserAgents extends Schema.Component {
  collectionName: 'components_meta_user_agents';
  info: {
    displayName: 'User Agents';
    icon: 'shield';
  };
  attributes: {
    userAgent: Attribute.String & Attribute.Required;
  };
}

export interface MetaPagePath extends Schema.Component {
  collectionName: 'components_meta_page_paths';
  info: {
    displayName: 'PagePath';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    path: Attribute.String & Attribute.Required;
  };
}

export interface MetaMoreArticlesOptions extends Schema.Component {
  collectionName: 'components_meta_more_articles_options';
  info: {
    displayName: 'MoreArticlesOptions';
    icon: 'filter';
    description: '';
  };
  attributes: {
    sort: Attribute.Enumeration<['asc', 'desc']> &
      Attribute.Required &
      Attribute.DefaultTo<'desc'>;
    sortField: Attribute.Enumeration<['id', 'type', 'publishedAt']> &
      Attribute.Required &
      Attribute.DefaultTo<'id'>;
    limit: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<10>;
    type: Attribute.String;
  };
}

export interface MetaMeta extends Schema.Component {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'Robots SEO';
    icon: 'write';
    description: '';
  };
  attributes: {
    pages: Attribute.Component<'meta.page-path', true> & Attribute.Required;
    userAgent: Attribute.String & Attribute.Required & Attribute.DefaultTo<'*'>;
  };
}

export interface BlocksWorksMini extends Schema.Component {
  collectionName: 'components_blocks_works_minis';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0440\u0430\u0431\u043E\u0442\u044B (\u043C\u0438\u043D\u0438)';
    icon: 'apps';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'works-mini-block'>;
    blockId: Attribute.String;
    title: Attribute.Component<'ui.title'>;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
    data: Attribute.Relation<
      'blocks.works-mini',
      'oneToMany',
      'api::work-mini.work-mini'
    >;
  };
}

export interface BlocksWorksLarge extends Schema.Component {
  collectionName: 'components_blocks_works_larges';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0440\u0430\u0431\u043E\u0442\u044B (\u0431\u043E\u043B\u044C\u0448\u0438\u0435)';
    icon: 'apps';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'works-large-block'>;
    blockId: Attribute.String;
    title: Attribute.Component<'ui.title'>;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
    data: Attribute.Relation<
      'blocks.works-large',
      'oneToMany',
      'api::work-large.work-large'
    >;
  };
}

export interface BlocksTitleWithButtons extends Schema.Component {
  collectionName: 'components_blocks_title_with_buttons';
  info: {
    displayName: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441 \u043A\u043D\u043E\u043F\u043A\u0430\u043C\u0438';
    icon: 'apps';
    description: '';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'title-with-buttons'>;
    blockId: Attribute.String;
    data: Attribute.Relation<
      'blocks.title-with-buttons',
      'oneToOne',
      'api::title-with-buttons.title-with-buttons'
    >;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
  };
}

export interface BlocksTekstovyjBlokBolshoj extends Schema.Component {
  collectionName: 'components_blocks_tekstovyj_blok_bolshoj_s';
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u0431\u043B\u043E\u043A (\u0431\u043E\u043B\u044C\u0448\u043E\u0439)';
    icon: 'italic';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'ui.title'> & Attribute.Required;
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'text-content-big-block'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
    data: Attribute.Relation<
      'blocks.tekstovyj-blok-bolshoj',
      'oneToOne',
      'api::text-content-big.text-content-big'
    >;
  };
}

export interface BlocksTeamBlock extends Schema.Component {
  collectionName: 'components_blocks_team_blocks';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u043A\u043E\u043C\u0430\u043D\u0434\u0430';
    icon: 'emotionHappy';
  };
  attributes: {
    title: Attribute.Component<'ui.title'>;
    data: Attribute.Relation<
      'blocks.team-block',
      'oneToMany',
      'api::team.team'
    >;
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'team-block'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
  };
}

export interface BlocksStepsBlock extends Schema.Component {
  collectionName: 'components_blocks_steps_blocks';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0448\u0430\u0433\u043E\u0432';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'work-steps'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
    title: Attribute.Component<'ui.title'>;
    data: Attribute.Relation<
      'blocks.steps-block',
      'oneToOne',
      'api::step.step'
    >;
  };
}

export interface BlocksServiceBlock extends Schema.Component {
  collectionName: 'components_blocks_service_blocks';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0443\u0441\u043B\u0443\u0433';
    icon: 'grid';
  };
  attributes: {
    data: Attribute.Relation<
      'blocks.service-block',
      'oneToMany',
      'api::service.service'
    >;
    title: Attribute.Component<'ui.title'>;
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'services-block'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'from-bottom-to-top'>;
  };
}

export interface BlocksReviewBlock extends Schema.Component {
  collectionName: 'components_blocks_review_blocks';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u043E\u0442\u0437\u044B\u0432\u043E\u0432';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.Component<'ui.title'>;
    reviews: Attribute.Component<'ui.review-card', true> & Attribute.Required;
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'reviews-block'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
  };
}

export interface BlocksFormBlock extends Schema.Component {
  collectionName: 'components_blocks_form_blocks';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0441 \u0444\u043E\u0440\u043C\u043E\u0439';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'form-block'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
    data: Attribute.Relation<'blocks.form-block', 'oneToOne', 'api::form.form'>;
  };
}

export interface BlocksCollectLinkMini extends Schema.Component {
  collectionName: 'components_blocks_collect_link_minis';
  info: {
    displayName: '\u041E\u0444\u0444\u0435\u0440 \u0441 \u0441\u0441\u044B\u043B\u043A\u043E\u0439 (\u043C\u0438\u043D\u0438)';
    icon: 'cursor';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'collect-link-mini'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
    data: Attribute.Relation<
      'blocks.collect-link-mini',
      'oneToOne',
      'api::collect-link-mini.collect-link-mini'
    >;
  };
}

export interface BlocksCollectLinkLarge extends Schema.Component {
  collectionName: 'components_blocks_collect_link_larges';
  info: {
    displayName: '\u041E\u0444\u0444\u0435\u0440 \u0441 \u0441\u0441\u044B\u043B\u043A\u043E\u0439 (\u0431\u043E\u043B\u044C\u0448\u043E\u0439)';
    icon: 'cursor';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'collect-link-large'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
    data: Attribute.Relation<
      'blocks.collect-link-large',
      'oneToOne',
      'api::collect-link-large.collect-link-large'
    >;
  };
}

export interface BlocksBolsheStatej extends Schema.Component {
  collectionName: 'components_blocks_bolshe_statej';
  info: {
    displayName: '\u0411\u043E\u043B\u044C\u0448\u0435 \u0441\u0442\u0430\u0442\u0435\u0439';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'more-articles-block'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
    data: Attribute.Component<'meta.more-articles-options'> &
      Attribute.Required;
    title: Attribute.Component<'ui.title'>;
  };
}

export interface BlocksArticleBlock extends Schema.Component {
  collectionName: 'components_blocks_article_blocks';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0441\u0442\u0430\u0442\u044C\u0438';
    icon: 'dashboard';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'article-block'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
    data: Attribute.Relation<
      'blocks.article-block',
      'oneToOne',
      'api::articles.articles'
    >;
  };
}

export interface BlocksAdvantagesBlock extends Schema.Component {
  collectionName: 'components_blocks_advantages_blocks';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432';
    icon: 'apps';
  };
  attributes: {
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'advantages-block'>;
    blockId: Attribute.String;
    title: Attribute.Component<'ui.title'>;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
    data: Attribute.Component<'ui.advantage', true> & Attribute.Required;
  };
}

export interface BlocksAccordionBlock extends Schema.Component {
  collectionName: 'components_blocks_accordion_blocks';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0430\u043A\u043A\u043E\u0440\u0434\u0435\u043E\u043D\u043E\u0432';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    data: Attribute.Relation<
      'blocks.accordion-block',
      'oneToOne',
      'api::accordion.accordion'
    >;
    title: Attribute.Component<'ui.title'>;
    blockName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'accordion-block'>;
    blockId: Attribute.String;
    animation: Attribute.Enumeration<
      [
        'from-bottom-to-top',
        'from-top-to-bottom',
        'from-left-to-right',
        'from-right-to-left',
        'none'
      ]
    > &
      Attribute.DefaultTo<'from-bottom-to-top'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.title': UiTitle;
      'ui.text-with-link': UiTextWithLink;
      'ui.team-person': UiTeamPerson;
      'ui.step': UiStep;
      'ui.review-person': UiReviewPerson;
      'ui.review-card': UiReviewCard;
      'ui.price': UiPrice;
      'ui.news-message': UiNewsMessage;
      'ui.logo': UiLogo;
      'ui.link': UiLink;
      'ui.label-with-value': UiLabelWithValue;
      'ui.input-props': UiInputProps;
      'ui.custom-link': UiCustomLink;
      'ui.custom-input': UiCustomInput;
      'ui.custom-button': UiCustomButton;
      'ui.contact-link': UiContactLink;
      'ui.advantage': UiAdvantage;
      'ui.accordion': UiAccordion;
      'meta.yandex-metrika-init-parameters': MetaYandexMetrikaInitParameters;
      'meta.user-agents': MetaUserAgents;
      'meta.page-path': MetaPagePath;
      'meta.more-articles-options': MetaMoreArticlesOptions;
      'meta.meta': MetaMeta;
      'blocks.works-mini': BlocksWorksMini;
      'blocks.works-large': BlocksWorksLarge;
      'blocks.title-with-buttons': BlocksTitleWithButtons;
      'blocks.tekstovyj-blok-bolshoj': BlocksTekstovyjBlokBolshoj;
      'blocks.team-block': BlocksTeamBlock;
      'blocks.steps-block': BlocksStepsBlock;
      'blocks.service-block': BlocksServiceBlock;
      'blocks.review-block': BlocksReviewBlock;
      'blocks.form-block': BlocksFormBlock;
      'blocks.collect-link-mini': BlocksCollectLinkMini;
      'blocks.collect-link-large': BlocksCollectLinkLarge;
      'blocks.bolshe-statej': BlocksBolsheStatej;
      'blocks.article-block': BlocksArticleBlock;
      'blocks.advantages-block': BlocksAdvantagesBlock;
      'blocks.accordion-block': BlocksAccordionBlock;
    }
  }
}
