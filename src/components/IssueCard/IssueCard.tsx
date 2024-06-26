import {
  StyledIssueCard,
  Title,
  Actions,
  Description,
  Avatars,
  StyledAvatar,
  StyledGrayAvatar,
  NoMembers,
  LockIcon,
} from "./IssueCard.styles";
import React, {useState, useRef} from "react";
import {Button, SvgIcon as Icon, Menu, Portal, Box} from "../";
import {MenuOption} from "../Menu/Menu";

interface IssueUserLinkUser {
  fullName?: string;
  profileImage?: {
    url?: string;
  };
}

interface IssueUserLink {
  userId: string;
  user?: IssueUserLinkUser;
}

interface Issue {
  id: string;
  title: string;
  description: string;
  userLinks: IssueUserLink[];
  shared: boolean;
  notificationsEnabled?: boolean;
}

export interface IssueCardProps {
  issue: Issue;
  accessLevel: "member" | "non_member" | "admin";
  toggleNotifications: () => void;
  editIssue: () => void;
  joinIssue: (issue: unknown) => void;
  leaveIssue: () => void;
  deleteIssue: () => void;
  maxAvatars: number;
  menuContainer?: string | HTMLElement | null;
  pinned: boolean;
  togglePinned: () => void;
  truncateDescription?: number;
  startAdornment?: React.ReactNode;
}

const IssueCard = ({
  issue,
  accessLevel,
  toggleNotifications,
  editIssue,
  joinIssue,
  leaveIssue,
  deleteIssue,
  maxAvatars = 4,
  menuContainer,
  pinned,
  togglePinned,
  truncateDescription,
  startAdornment,
}: IssueCardProps) => {
  const {id, title, description, userLinks, shared} = issue;
  const [isMenuShown, setMenuShown] = useState(false);
  const menuRef: React.RefObject<HTMLButtonElement> =
    useRef<HTMLButtonElement>() as React.RefObject<HTMLButtonElement>;

  return (
    <StyledIssueCard data-cy={`issue-card-${id}`}>
      <Box
        cs={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "spacing.xs",
        }}
      >
        <Box
          cs={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "spacing.xs",
            flexGrow: "1",
          }}
        >
          {startAdornment}
          <Title variant="heading" size="xs" data-cy="issue-card-title">
            {title}
          </Title>
        </Box>
        <Actions>
          {!shared && (
            <LockIcon>
              <Icon icon="lock" size="lg" />
            </LockIcon>
          )}
          {issue.notificationsEnabled === false && (
            <Button
              data-cy="issue-card-unmute"
              variant="text"
              iconOnly
              title="Unmute issue"
              onClick={(e) => {
                e.preventDefault();
                toggleNotifications();
              }}
            >
              <Icon icon={"fa-solid fa-bell-slash"} size="lg" />
            </Button>
          )}
          {shared && accessLevel === "non_member" && (
            <Button
              data-cy="issue-card-join"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                joinIssue(issue);
              }}
            >
              Join
            </Button>
          )}
          {(accessLevel === "member" || accessLevel === "admin") && (
            <Button
              data-cy="issue-card-actions"
              variant="text"
              iconOnly
              ref={menuRef}
              onClick={(e) => {
                e.preventDefault();
                setMenuShown(!isMenuShown);
              }}
            >
              <Icon icon={"ellipsis"} size="lg" />
            </Button>
          )}
        </Actions>
        {isMenuShown && (
          <div
            role="button"
            tabIndex={0}
            onClick={(e) => e.preventDefault()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
              }
            }}
          >
            <Portal container={menuContainer} disablePortal={!menuContainer}>
              <Menu
                data-cy="issue-card-menu"
                placement="bottom-end"
                options={
                  [
                    {
                      id: pinned ? "unpin" : "pin",
                      "data-cy": pinned ? "issue-card-unpin" : "issue-card-pin",
                      text: pinned ? "Unpin Campaign" : "Pin Campaign",
                      startAdornment: <Icon icon={"fa-solid fa-thumbtack"} />,
                      onSelect: togglePinned,
                    },
                    (accessLevel === "member" || accessLevel === "admin") && {
                      id: "mute",
                      "data-cy": "issue-card-mute",
                      text: issue.notificationsEnabled
                        ? "Mute Campaign"
                        : "Unmute Campaign",
                      startAdornment: (
                        <Icon
                          icon={
                            issue.notificationsEnabled
                              ? "fa-solid fa-bell-slash"
                              : "fa-solid fa-bell"
                          }
                        />
                      ),
                      onSelect: toggleNotifications,
                    },
                    (accessLevel === "member" || accessLevel === "admin") && {
                      id: "edit",
                      "data-cy": "issue-card-edit",
                      text: "Edit Campaign",
                      startAdornment: <Icon icon={"pen"} />,
                      onSelect: editIssue,
                    },
                    (accessLevel === "member" || accessLevel === "admin") && {
                      id: "leave",
                      "data-cy": "issue-card-leave",
                      text: "Leave Campaign",
                      startAdornment: <Icon icon={"fa-solid fa-person-to-door"} />,
                      onSelect: leaveIssue,
                    },
                    accessLevel === "admin" && {
                      id: "leave",
                      "data-cy": "issue-card-delete",
                      text: "Delete Campaign",
                      startAdornment: <Icon icon={"trash"} />,
                      onSelect: deleteIssue,
                    },
                  ].filter((item) => !!item) as MenuOption[]
                }
                onClose={() => setMenuShown(false)}
                anchorEl={menuRef}
              />
            </Portal>
          </div>
        )}
      </Box>
      <Description variant="body" size="md" data-cy="issue-card-description">
        {truncateDescription && description?.length >= truncateDescription
          ? description.slice(0, truncateDescription).trim() + "..."
          : description}
      </Description>
      <Avatars>
        {userLinks?.map((link, idx) =>
          idx < maxAvatars ? (
            <StyledAvatar
              key={link?.userId}
              data-cy={`issue-card-avatar-${link?.userId}`}
              alt={link?.user?.fullName}
              size="xl"
              src={link?.user?.profileImage?.url}
            />
          ) : null
        )}
        {userLinks?.length > maxAvatars ? (
          <StyledGrayAvatar alt={`+ ${userLinks?.length - maxAvatars}`} size="xl" />
        ) : null}
      </Avatars>
      {!userLinks?.length && (
        <NoMembers variant="label" size="sm">
          No members
        </NoMembers>
      )}
    </StyledIssueCard>
  );
};

export default IssueCard;
