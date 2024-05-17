import axios from "axios";
import cheerio from "cheerio";

export class MetaService {
  getMeta = async (value) => {
    const result = await axios.get(value);
    const $ = cheerio.load(result.data);
    const metaTag = {
      title: "",
      description: "",
      image: "",
    };

    $("meta").each((index, meta) => {
      const property = $(meta).attr("property");
      const content = $(meta).attr("content");

      if (!(property && property.startsWith("og:"))) {
        return metaTag;
      }

      switch (property) {
        case "og:title":
          metaTag.title = content;
          break;
        case "og:description":
          metaTag.description = content;
          break;
        case "og:image":
          metaTag.image = content;
          break;
      }
    });

    return metaTag;
  };
}
