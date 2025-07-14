type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export default function DefaultInput({
  id,
  labelText,
  type,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} {...rest} />
    </>
  );
}
