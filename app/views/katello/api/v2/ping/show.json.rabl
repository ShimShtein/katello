object Katello::Util::Data.ostructize(@resource)

attribute :status
child :services => :services do
  attributes :elasticsearch, :foreman_tasks, :foreman_auth, :candlepin, :candlepin_auth, :pulp, :pulp_auth
end
