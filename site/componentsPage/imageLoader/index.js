import Markdown from '../../../libs/markdown';

export default class ImageLoader extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/imageLoader.md`);
  }
}