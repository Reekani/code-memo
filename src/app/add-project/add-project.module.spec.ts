import { AddProjectModule } from './add-project.module';

describe('AddProjectModule', () => {
  let addProjectModule: AddProjectModule;

  beforeEach(() => {
    addProjectModule = new AddProjectModule();
  });

  it('should create an instance', () => {
    expect(addProjectModule).toBeTruthy();
  });
});
