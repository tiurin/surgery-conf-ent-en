import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProgramPagePreview from './preview-templates/ProgramPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import SponsorsPagePreview from './preview-templates/SponsorsPagePreview'
import WorkshopPagePreview from './preview-templates/WorkshopPagePreview'
import RegistrationPagePreview from './preview-templates/RegistrationPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('program', ProgramPagePreview)
CMS.registerPreviewTemplate('workshop', WorkshopPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('sponsors', SponsorsPagePreview)
CMS.registerPreviewTemplate('registration', RegistrationPagePreview)
