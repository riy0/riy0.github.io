// @flow strict
import { ICONS } from "../constants";

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case "twitter":
      icon = ICONS.TWITTER;
      break;
    case "github":
      icon = ICONS.GITHUB;
      break;
    case "email":
      icon = ICONS.EMAIL;
      break;
    case "linkedin":
      icon = ICONS.LINKEDIN;
      break;
    case "instagram":
      icon = ICONS.INSTAGRAM;
      break;
    case "facebook":
      icon = ICONS.FACEBOOK;
      break;
    case "gitlab":
      icon = ICONS.GITLAB;
      break;
    case "codepen":
      icon = ICONS.CODEPEN;
      break;
    case "ted":
      icon = ICONS.YOUTUBE;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
