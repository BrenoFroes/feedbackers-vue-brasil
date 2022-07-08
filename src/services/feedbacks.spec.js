import FeedbackService from './feedbacks'
import mockAxios from 'axios'

jest.mock('axios')

describe('FeedbackService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return a list of feedbacks', async () => {
    const mockedResponse = { data: {} }
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve(mockedResponse)
    })

    const response = await FeedbackService(mockAxios).getAll()

    expect(mockAxios.get).toHaveBeenCalled()
    expect(response).toMatchSnapshot()
  })
})
