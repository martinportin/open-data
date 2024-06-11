import { ChangeEvent, ChangeEventHandler } from 'react';

export default function PrincipalsToolbar({
  params,
  principals,
  onCheckBoxChange,
  isPublic,
  isPrivate,
}: Readonly<{
  params: { dictionary: Dictionary };
  principals: Principal[];
  onCheckBoxChange: ChangeEventHandler<HTMLInputElement>;
  isPublic: boolean;
  isPrivate: boolean;
}>) {
  const { dictionary } = params;
  return (
    <>
      <h2>
        {dictionary.principals.quantity} ({principals.length})
      </h2>
      <form>
        <label htmlFor="publicCheckbox">{dictionary.principals.public}:</label>
        <input
          id="publicCheckbox"
          type="checkbox"
          onChange={onCheckBoxChange}
          checked={isPublic}
        />
        <label htmlFor="privateCheckbox">
          {dictionary.principals.private}:
        </label>
        <input
          id="privateCheckbox"
          type="checkbox"
          onChange={onCheckBoxChange}
          checked={isPrivate}
        />
      </form>
    </>
  );
}
