import {
  Create,
  Identifier,
  ReferenceManyField,
  SelectArrayInput,
  SimpleForm,
  TextInput,
  WithRecord,
  required,
  useTranslate,
} from 'react-admin';
import useRoutePermissions from '../../utils/use-route-permissions.hook';
import { CustomToolbar } from '../components/custom-toolbar.component';
import { UserRoleOnUser, UserRoles } from '../../interfaces/user';
import { userRolesChoices } from '../user/constants';

export const PageCreate = (props: any) => {
  const { isSuperAdmin, isAdmin } = useRoutePermissions();
  const translate = useTranslate();

  return (
    <Create {...props} mutationMode="pessimistic" redirect={(resource: string, id?: Identifier) => `${resource}/${id}`}>
      <SimpleForm margin="none" toolbar={<CustomToolbar hideDelete={!isSuperAdmin} />} sx={{ maxWidth: '600px' }}>
        <h1>{`${translate('ra.action.create')} ${translate('resources.page.name', 1).toLowerCase()}`}</h1>
        <TextInput source="url" validate={[required()]} />
        <TextInput source="pageName" validate={[required()]} />
        <TextInput
          source="title"
          validate={[required()]}
          multiline
          inputProps={{
            sx: { width: '222px', fontFamily: 'Montserrat', letterSpacing: '-0.0111em' },
          }}
        />
        <TextInput
          source="description"
          validate={[required()]}
          multiline
          sx={{ hyphens: 'auto' }}
          inputProps={{
            sx: { width: '576px', fontFamily: 'Montserrat', minHeight: '3em' },
          }}
        />

        <WithRecord
          label="pageName"
          render={(record) => (
            <ReferenceManyField
              source="pageName"
              record={record.editRoles}
              reference="editRolesOnPage"
              target="pageName"
            >
              <SelectArrayInput
                defaultValue={[]}
                source="editRoles"
                format={(data) => data?.map((x: UserRoleOnUser) => x.role)}
                parse={(data: UserRoles[]) =>
                  userRolesChoices.filter((roleChoice) => data.some((role) => role === roleChoice.role))
                }
                validate={required()}
                optionValue="role"
                optionText="role"
                readOnly={!isAdmin}
                choices={userRolesChoices}
              />
            </ReferenceManyField>
          )}
        />
      </SimpleForm>
    </Create>
  );
};
