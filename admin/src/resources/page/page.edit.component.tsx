import {
  BooleanInput,
  Edit,
  ReferenceManyField,
  SelectArrayInput,
  SimpleForm,
  TextInput,
  WithRecord,
  required,
  useGetRecordId,
  useStore,
  useTranslate,
} from 'react-admin';
import { PageSwitch } from '../components/PageSwitch.component';
import { CustomToolbar } from '../components/custom-toolbar.component';
import { useEffect, useState } from 'react';
import useRoutePermissions from '../../utils/use-route-permissions.hook';
import { userRolesChoices } from '../user/constants';
import { UserRoleOnUser, UserRoles } from '../../interfaces/user';
import { GalleryInput } from '../components/gallery/gallery-input.component';
import { WithFormContext } from '../components/with-form-context/with-form-context.component';
import { urlToPageName } from '../../utils/data';

export const PageEdit = (props: any) => {
  const { isAdmin, canCreate, isSuperAdmin } = useRoutePermissions();
  const translate = useTranslate();
  const [, setValue] = useStore('activePageIdEdit', '');
  const recordId = useGetRecordId();

  useEffect(() => {
    setValue(recordId.toString());
  }, [recordId]);

  return (
    <Edit {...props} undoable={false} redirect={false} mutationMode="pessimistic">
      <SimpleForm margin="none" toolbar={<CustomToolbar hideDelete={!canCreate} />} sx={{ maxWidth: '900px' }}>
        <h1>
          {`${translate('ra.action.edit')} `}
          <WithRecord label="pageName" render={(record) => <span>{record.url}</span>} />
        </h1>
        <TextInput source="url" validate={[required()]} readOnly={!canCreate} />
        <WithFormContext>
          {({ watch, setValue }) => {
            const url = watch('url');
            const [mounted, setMounted] = useState(false);

            useEffect(() => {
              const pageName = urlToPageName(url);
              if (isSuperAdmin && mounted) {
                setValue('pageName', pageName);
              }
              if (!isSuperAdmin) {
                setValue('pageName', pageName);
              }
            }, [url]);

            useEffect(() => {
              setMounted(true);
            }, []);

            return (
              <TextInput
                type={isSuperAdmin ? 'text' : 'hidden'}
                hidden={!isSuperAdmin}
                style={!isSuperAdmin ? { display: 'none' } : undefined}
                source="pageName"
                validate={[required()]}
              />
            );
          }}
        </WithFormContext>
        <WithRecord
          label="pageName"
          render={(record) => (
            <>
              {!record.url.includes('[') && (
                <>
                  <TextInput
                    source="title"
                    multiline
                    inputProps={{
                      sx: { width: '222px', fontFamily: 'Montserrat', letterSpacing: '-0.0111em' },
                    }}
                  />
                  <TextInput
                    source="description"
                    multiline
                    sx={{ hyphens: 'auto' }}
                    inputProps={{
                      sx: { width: '576px', fontFamily: 'Montserrat', minHeight: '3em' },
                    }}
                  />
                </>
              )}
            </>
          )}
        />

        <GalleryInput />
        <WithFormContext>
          {({ watch }) => {
            if (watch('imgSrc')) {
              return (
                <>
                  <BooleanInput source="showImgInDesktop" />
                  <BooleanInput source="showImgInMobile" />
                </>
              );
            }
          }}
        </WithFormContext>

        <BooleanInput source="showSearchBar" />

        <WithRecord
          label="editRoles"
          render={(record) => (
            <ReferenceManyField
              source="editRoles"
              record={record.editRoles}
              reference="editRolesOnPage"
              target="editRoles"
            >
              <SelectArrayInput
                defaultValue={[userRolesChoices.find((x) => x.role === 'EDITOR')]}
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

        {/* Switches by pageName */}
        <PageSwitch />
      </SimpleForm>
    </Edit>
  );
};
