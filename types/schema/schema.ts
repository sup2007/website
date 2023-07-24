import type { BlockCardGroup, BlockColumns, BlockHeroHeadline, BlockMediaFullWidth } from './blocks/index.js';
import type {
	ComponentButton,
	ComponentButtonGroup,
	ComponentHeading,
	ComponentMedia,
	ComponentMetrics,
	ComponentQuote,
} from './components/index.js';
import type { Article, Career, CaseStudy, Form, Page, Report, SiteBanner, Video } from './content/index.js';
import type { Globals, Navigation, Redirect, Seo } from './meta/index.js';
import type { ContentType, Event, Partner, Team } from './routes/index.js';
import type { File, User } from './system/index.js';

/** Directus Schema for SDK */
export interface Schema {
	// Routes
	articles: Article[];
	content_types: ContentType[];
	events: Event[];
	pages: Page[];
	partners: Partner[];
	team: Team[];

	// Content
	careers: Career[];
	case_studies: CaseStudy[];
	forms: Form[];
	reports: Report[];
	site_banners: SiteBanner[];
	videos: Video[];

	// Blocks
	block_cardgroup: BlockCardGroup[];
	block_columns: BlockColumns[];
	block_hero_headline: BlockHeroHeadline[];
	block_media_fullwidth: BlockMediaFullWidth[];

	// Components
	comp_button_groups: ComponentButtonGroup[];
	comp_button: ComponentButton[];
	comp_heading: ComponentHeading[];
	comp_media: ComponentMedia[];
	comp_metrics: ComponentMetrics[];
	comp_quote: ComponentQuote[];

	// Meta
	globals: Globals;
	navigation: Navigation[];
	redirects: Redirect[];
	seo: Seo[];

	// System
	directus_files: File[];
	directus_users: User[];
}
