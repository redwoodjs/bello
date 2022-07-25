// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout'
import EmptyLayout from 'src/layouts/EmptyLayout/EmptyLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={EmptyLayout}>
        <Route path="/onboarding" page={UserOnboardingPage} name="onboarding" />
        <Route path="/ideas/new" page={IdeaNewIdeaPage} name="newIdea" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomepagePage} name="homepage" />
        <Route path="/dashboard" page={UserDashboardPage} name="dashboard" />
        <Route path="/ideas/{id:Int}/edit" page={IdeaEditIdeaPage} name="editIdea" />
        <Route path="/ideas/{id:Int}" page={IdeaIdeaPage} name="idea" />
        <Route path="/ideas" page={IdeaIdeasPage} name="ideas" />
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
        <Route path="/topics/new" page={TopicNewTopicPage} name="newTopic" />
        <Route path="/topics/{id:Int}/edit" page={TopicEditTopicPage} name="editTopic" />
        <Route path="/topics/{id:Int}" page={TopicTopicPage} name="topic" />
        <Route path="/topics" page={TopicTopicsPage} name="topics" />
        <Route path="/skills/new" page={SkillNewSkillPage} name="newSkill" />
        <Route path="/skills/{id:Int}/edit" page={SkillEditSkillPage} name="editSkill" />
        <Route path="/skills/{id:Int}" page={SkillSkillPage} name="skill" />
        <Route path="/skills" page={SkillSkillsPage} name="skills" />
        <Route path="/skill-sets/new" page={SkillSetNewSkillSetPage} name="newSkillSet" />
        <Route path="/skill-sets/{id:Int}/edit" page={SkillSetEditSkillSetPage} name="editSkillSet" />
        <Route path="/skill-sets/{id:Int}" page={SkillSetSkillSetPage} name="skillSet" />
        <Route path="/skill-sets" page={SkillSetSkillSetsPage} name="skillSets" />
        <Route path="/members/new" page={MemberNewMemberPage} name="newMember" />
        <Route path="/members/{id:Int}/edit" page={MemberEditMemberPage} name="editMember" />
        <Route path="/members/{id:Int}" page={MemberMemberPage} name="member" />
        <Route path="/members" page={MemberMembersPage} name="members" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
