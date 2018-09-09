import { ProjectsListModule } from './projects-list.module';

describe('ProjectsListModule', () => {
  let projectsListModule: ProjectsListModule;

  beforeEach(() => {
    projectsListModule = new ProjectsListModule();
  });

  it('should create an instance', () => {
    expect(projectsListModule).toBeTruthy();
  });
});
