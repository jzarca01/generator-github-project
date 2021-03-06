export default async function writing(yo) {
  yo.fs.copyTpl(
    yo.templatePath('template/shared/README.md'),
    yo.destinationPath('README.md'),
    yo.context
  );
  yo.fs.copyTpl(
    yo.templatePath('template/shared/CHANGELOG.md'),
    yo.destinationPath('CHANGELOG.md'),
    yo.context
  );
  yo.fs.copy(
    yo.templatePath('template/shared/CONTRIBUTING.md'),
    yo.destinationPath('CONTRIBUTING.md')
  );
}
