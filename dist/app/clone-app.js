import { AppFlow } from '@beecode/msh-app-boot';
import { CloneInitiate } from '#src/app/init/clone-initate';
import { SetupInitiate } from '#src/app/init/setup-initiate';
export class CloneApp extends AppFlow {
    constructor() {
        super(new SetupInitiate(), new CloneInitiate());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUtYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9jbG9uZS1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQTtBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFFNUQsTUFBTSxPQUFPLFFBQVMsU0FBUSxPQUFPO0lBQ3BDO1FBQ0MsS0FBSyxDQUFDLElBQUksYUFBYSxFQUFFLEVBQUUsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFBO0lBQ2hELENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEZsb3cgfSBmcm9tICdAYmVlY29kZS9tc2gtYXBwLWJvb3QnXG5cbmltcG9ydCB7IENsb25lSW5pdGlhdGUgfSBmcm9tICcjc3JjL2FwcC9pbml0L2Nsb25lLWluaXRhdGUnXG5pbXBvcnQgeyBTZXR1cEluaXRpYXRlIH0gZnJvbSAnI3NyYy9hcHAvaW5pdC9zZXR1cC1pbml0aWF0ZSdcblxuZXhwb3J0IGNsYXNzIENsb25lQXBwIGV4dGVuZHMgQXBwRmxvdyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKG5ldyBTZXR1cEluaXRpYXRlKCksIG5ldyBDbG9uZUluaXRpYXRlKCkpXG5cdH1cbn1cbiJdfQ==