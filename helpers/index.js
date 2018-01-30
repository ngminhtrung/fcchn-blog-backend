import _ from 'lodash';

export const removePassword = (doc) => {
  if (_.isArray(doc)) {
    _.forEach(doc, v => v.password = undefined);
  } else {
    doc.password = undefined;
  }
}