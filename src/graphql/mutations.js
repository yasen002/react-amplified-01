/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      officialName
      preferredName
      studentID
      country
      city
      zipCode
      phone
      major
      interest
      peerMentor
      meetingTime
      EOP_Scholar
      units
      gpa
      documentUpload
      email
      membership
      payment
      vivo
      chapterInvolvement
      committeeCredit
      meetingAttendance
      socials
      workshops
      negative
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      officialName
      preferredName
      studentID
      country
      city
      zipCode
      phone
      major
      interest
      peerMentor
      meetingTime
      EOP_Scholar
      units
      gpa
      documentUpload
      email
      membership
      payment
      vivo
      chapterInvolvement
      committeeCredit
      meetingAttendance
      socials
      workshops
      negative
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      officialName
      preferredName
      studentID
      country
      city
      zipCode
      phone
      major
      interest
      peerMentor
      meetingTime
      EOP_Scholar
      units
      gpa
      documentUpload
      email
      membership
      payment
      vivo
      chapterInvolvement
      committeeCredit
      meetingAttendance
      socials
      workshops
      negative
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
