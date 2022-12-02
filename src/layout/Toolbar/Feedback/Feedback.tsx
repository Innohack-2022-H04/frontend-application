import { TooltipIconButton, TooltipIconButtonProps } from '@components';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

export interface PureFeedbackProps {
  onClick: TooltipIconButtonProps['onClick'];
}
export function PureFeedback({ onClick }: PureFeedbackProps) {
  return (
    <TooltipIconButton
      icon={FeedbackOutlinedIcon}
      tooltip="Toggle feedback drawer"
      onClick={onClick}
    />
  );
}

function Feedback() {
  // TODO redux and saga
  const handleClick = () => {};

  return <PureFeedback onClick={handleClick} />;
}
export default Feedback;
